import React, { useState, useEffect, useRef } from 'react';
import { ANIMALS, SYMPTOMS, DISEASE_DB, VETS, LANGUAGES } from './data/livestock';
import './App.css';

// ─── Utility: diagnose from symptoms ─────────────────────────────────────────
function diagnose(animalType, selectedSymptoms) {
  if (!selectedSymptoms.length) return [];
  const results = DISEASE_DB
    .filter(d => d.animals.includes(animalType))
    .map(d => {
      const matches = d.matchSymptoms.filter(s => selectedSymptoms.includes(s));
      const score = matches.length / d.matchSymptoms.length;
      return { ...d, matchCount: matches.length, score };
    })
    .filter(d => d.matchCount > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
  return results;
}

// ─── Utility: text to speech ──────────────────────────────────────────────────
function speak(text, lang = 'en') {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  const langMap = { en: 'en-IN', kn: 'kn-IN', hi: 'hi-IN', te: 'te-IN', ta: 'ta-IN', ml: 'ml-IN' };
  utter.lang = langMap[lang] || 'en-IN';
  utter.rate = 0.9;
  window.speechSynthesis.speak(utter);
}

// ─── Severity color helper ─────────────────────────────────────────────────────
function sevClass(s) {
  return { critical: 'sev-critical', high: 'sev-high', medium: 'sev-medium', low: 'sev-low' }[s] || 'sev-low';
}

// ─── Components ──────────────────────────────────────────────────────────────

function WeatherCard({ t, lang }) {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        pos => {
          const { latitude, longitude } = pos.coords;
          fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m&timezone=auto`)
            .then(r => r.json())
            .then(data => {
              setWeather({
                temp: Math.round(data.current_weather.temperature),
                windspeed: Math.round(data.current_weather.windspeed),
                humidity: data.hourly?.relativehumidity_2m?.[0] ?? '--',
                code: data.current_weather.weathercode
              });
            })
            .catch(() => setWeather({ temp: 29, windspeed: 12, humidity: 65, code: 1 }));
        },
        () => setWeather({ temp: 29, windspeed: 12, humidity: 65, code: 1 })
      );
    } else {
      setWeather({ temp: 29, windspeed: 12, humidity: 65, code: 1 });
    }
  }, []);

  const getCondition = code => {
    if (code === 0) return '☀️ Clear';
    if (code <= 3) return '⛅ Partly Cloudy';
    if (code <= 67) return '🌧️ Rainy';
    if (code <= 77) return '❄️ Snow';
    return '🌩️ Thunderstorm';
  };

  const getHealthTip = (temp, humidity) => {
    if (temp > 38) return lang === 'kn' ? '⚠️ ಹೆಚ್ಚಿನ ತಾಪಮಾನ — ಹಸುಗಳಿಗೆ ಹೆಚ್ಚು ನೀರು ಕೊಡಿ' : '⚠️ Heat stress risk — ensure shade and extra water for animals';
    if (humidity > 85) return lang === 'kn' ? '⚠️ ಹೆಚ್ಚು ತೇವ — ಶಿಲೀಂಧ್ರ ರೋಗ ಅಪಾಯ' : '⚠️ High humidity — fungal disease risk, keep sheds dry';
    return lang === 'kn' ? '✅ ಹವಾಮಾನ ಸಾಮಾನ್ಯವಾಗಿದೆ' : '✅ Weather conditions are normal for animals';
  };

  return (
    <div className="weather-card card">
      <h3 className="card-title">{t.weather}</h3>
      {weather ? (
        <>
          <div className="weather-row">
            <div className="weather-stat">
              <span className="weather-icon">🌡️</span>
              <span className="weather-val">{weather.temp}°C</span>
              <span className="weather-lbl">{t.temp}</span>
            </div>
            <div className="weather-stat">
              <span className="weather-icon">💧</span>
              <span className="weather-val">{weather.humidity}%</span>
              <span className="weather-lbl">{t.humidity}</span>
            </div>
            <div className="weather-stat">
              <span className="weather-icon">💨</span>
              <span className="weather-val">{weather.windspeed} km/h</span>
              <span className="weather-lbl">Wind</span>
            </div>
          </div>
          <div className="weather-condition">{getCondition(weather.code)}</div>
          <div className="weather-tip">{getHealthTip(weather.temp, weather.humidity)}</div>
        </>
      ) : <div className="loading-dots">Loading weather<span className="dots">...</span></div>}
    </div>
  );
}

function VetCard({ vet, t }) {
  return (
    <div className={`vet-card ${vet.available ? 'vet-available' : 'vet-busy'}`}>
      <div className="vet-header">
        <div>
          <div className="vet-name">{vet.name}</div>
          <div className="vet-spec">{vet.specialty}</div>
          <div className="vet-loc">📍 {vet.location} · {vet.distance}</div>
        </div>
        <span className={`vet-badge ${vet.available ? 'badge-green' : 'badge-gray'}`}>
          {vet.available ? t.available : t.unavailable}
        </span>
      </div>
      <a href={`tel:${vet.phone}`} className="btn-call">
        📞 {t.call} — {vet.phone}
      </a>
    </div>
  );
}

function DiagnosisResult({ result, t, lang }) {
  const sevLabel = { critical: t.severity_critical, high: t.severity_high, medium: t.severity_medium, low: t.severity_low };
  const [openSection, setOpenSection] = useState('firstaid');

  const speakDiagnosis = () => {
    const text = `${result.name}. ${result.description} ${result.firstAid.join('. ')}`;
    speak(text, lang);
  };

  const confidence = Math.round(result.score * 100);

  return (
    <div className={`diagnosis-card ${sevClass(result.severity)}`}>
      <div className="diag-header">
        <div>
          <div className="diag-severity-badge">{sevLabel[result.severity]}</div>
          <h3 className="diag-name">{result.name}</h3>
          <div className="diag-confidence">
            <div className="conf-bar"><div className="conf-fill" style={{ width: `${confidence}%` }}></div></div>
            <span>{confidence}% match</span>
          </div>
        </div>
        <button className="btn-listen" onClick={speakDiagnosis} title={t.listen}>
          🔊 {t.listen}
        </button>
      </div>
      <p className="diag-desc">{result.description}</p>

      {result.severity === 'critical' && (
        <div className="emergency-banner">
          🚨 {t.emergency} — {t.saveLife}
        </div>
      )}

      <div className="diag-tabs">
        {['firstaid', 'medicine', 'warning', 'prevention'].map(tab => (
          <button
            key={tab}
            className={`diag-tab ${openSection === tab ? 'active' : ''}`}
            onClick={() => setOpenSection(tab)}
          >
            {{ firstaid: '🩺', medicine: '💊', warning: '⚠️', prevention: '🛡️' }[tab]}
            {{ firstaid: t.firstAid, medicine: t.medicine, warning: t.warning, prevention: t.prevention }[tab]}
          </button>
        ))}
      </div>

      <div className="diag-content">
        {openSection === 'firstaid' && (
          <ol className="step-list">
            {result.firstAid.map((step, i) => (
              <li key={i} className="step-item">
                <span className="step-num">{i + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        )}
        {openSection === 'medicine' && <p className="diag-text">{result.medicine}</p>}
        {openSection === 'warning' && <p className="diag-text warning-text">{result.warning}</p>}
        {openSection === 'prevention' && <p className="diag-text">{result.prevention}</p>}
      </div>
    </div>
  );
}

function HistoryPanel({ history, t }) {
  if (!history.length) return <div className="empty-history">{t.noHistory}</div>;
  return (
    <div className="history-list">
      {history.map((h, i) => (
        <div key={i} className="history-item">
          <div className="hist-left">
            <span className="hist-emoji">{ANIMALS[h.animal]?.emoji}</span>
            <div>
              <div className="hist-name">{h.animalName || h.breed}</div>
              <div className="hist-owner">{h.ownerName} · {h.village}</div>
              <div className="hist-diseases">{h.diseases.map(d => d.name).join(', ')}</div>
            </div>
          </div>
          <div className="hist-date">{h.date}</div>
        </div>
      ))}
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState('en');
  const t = LANGUAGES[lang].t;

  const [tab, setTab] = useState('diagnose'); // 'diagnose' | 'vets' | 'history' | 'weather'
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [symptoms, setSymptoms] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [ownerName, setOwnerName] = useState('');
  const [animalName, setAnimalName] = useState('');
  const [village, setVillage] = useState('');
  const [animalAge, setAnimalAge] = useState('');
  const [results, setResults] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [history, setHistory] = useState(() => {
    try { return JSON.parse(localStorage.getItem('pashuai_history') || '[]'); } catch { return []; }
  });
  const fileRef = useRef();

  const toggleSymptom = s => setSymptoms(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  const handlePhoto = e => {
    const file = e.target.files[0];
    if (!file) return;
    setPhoto(file);
    const reader = new FileReader();
    reader.onload = ev => setPhotoPreview(ev.target.result);
    reader.readAsDataURL(file);
  };

  const handleDiagnose = () => {
    if (!animal || symptoms.length === 0) return;
    setAnalyzing(true);
    setResults(null);
    setTimeout(() => {
      const diseases = diagnose(animal, symptoms);
      setResults(diseases);
      setAnalyzing(false);
      if (diseases.length > 0) {
        const newEntry = {
          animal, breed, ownerName, animalName, village, animalAge,
          symptoms, diseases, date: new Date().toLocaleDateString('en-IN'),
          photo: photoPreview
        };
        const updated = [newEntry, ...history].slice(0, 50);
        setHistory(updated);
        localStorage.setItem('pashuai_history', JSON.stringify(updated));
        // auto-speak top diagnosis
        if (diseases[0]) speak(`${diseases[0].name}. ${diseases[0].description}`, lang);
      }
    }, 1800);
  };

  const resetForm = () => {
    setAnimal(''); setBreed(''); setSymptoms([]); setPhoto(null);
    setPhotoPreview(null); setResults(null); setOwnerName('');
    setAnimalName(''); setVillage(''); setAnimalAge('');
  };

  return (
    <div className="app">
      {/* ── Top Bar ── */}
      <header className="topbar">
        <div className="logo">
          <span className="logo-leaf">🌿</span>
          <span className="logo-text">{t.appName}</span>
        </div>
        <div className="topbar-right">
          <select className="lang-select" value={lang} onChange={e => setLang(e.target.value)}>
            {Object.values(LANGUAGES).map(l => (
              <option key={l.code} value={l.code}>{l.nativeLabel}</option>
            ))}
          </select>
        </div>
      </header>

      {/* ── Hero ── */}
      {tab === 'diagnose' && !results && (
        <div className="hero">
          <p className="hero-tag">{t.tagline}</p>
        </div>
      )}

      {/* ── Tab Nav ── */}
      <nav className="tab-nav">
        {[
          { id: 'diagnose', icon: '🔬', label: t.diagnose },
          { id: 'vets', icon: '👨‍⚕️', label: t.nearbyVets },
          { id: 'weather', icon: '🌤️', label: t.weather },
          { id: 'history', icon: '📋', label: t.history },
        ].map(tb => (
          <button key={tb.id} className={`tab-btn ${tab === tb.id ? 'active' : ''}`} onClick={() => setTab(tb.id)}>
            <span>{tb.icon}</span>
            <span>{tb.label}</span>
          </button>
        ))}
      </nav>

      <main className="main-content">

        {/* ══ DIAGNOSE TAB ══ */}
        {tab === 'diagnose' && (
          <div>
            {!results ? (
              <div className="form-card card">
                {/* Animal selection */}
                <div className="form-section">
                  <label className="form-label">{t.selectAnimal}</label>
                  <div className="animal-grid">
                    {Object.entries(ANIMALS).map(([key, val]) => (
                      <button
                        key={key}
                        className={`animal-btn ${animal === key ? 'selected' : ''}`}
                        onClick={() => { setAnimal(key); setBreed(''); }}
                      >
                        <span className="animal-emoji">{val.emoji}</span>
                        <span className="animal-label">{val.label.split(' ')[0]}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Breed */}
                {animal && (
                  <div className="form-section">
                    <label className="form-label">{t.selectBreed}</label>
                    <select className="form-select" value={breed} onChange={e => setBreed(e.target.value)}>
                      <option value="">{t.selectBreed}</option>
                      {ANIMALS[animal].breeds.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                )}

                {/* Owner / Animal info */}
                <div className="form-row">
                  <div className="form-section half">
                    <label className="form-label">{t.ownerName}</label>
                    <input className="form-input" placeholder="e.g. Ravi Kumar" value={ownerName} onChange={e => setOwnerName(e.target.value)} />
                  </div>
                  <div className="form-section half">
                    <label className="form-label">{t.village}</label>
                    <input className="form-input" placeholder="e.g. Anekal" value={village} onChange={e => setVillage(e.target.value)} />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-section half">
                    <label className="form-label">{t.animalName}</label>
                    <input className="form-input" placeholder="e.g. Lakshmi / Tag#12" value={animalName} onChange={e => setAnimalName(e.target.value)} />
                  </div>
                  <div className="form-section half">
                    <label className="form-label">{t.animalAge}</label>
                    <input className="form-input" placeholder="e.g. 3 years" value={animalAge} onChange={e => setAnimalAge(e.target.value)} />
                  </div>
                </div>

                {/* Photo upload */}
                <div className="form-section">
                  <label className="form-label">{t.uploadPhoto}</label>
                  <div className="upload-area" onClick={() => fileRef.current.click()}>
                    {photoPreview
                      ? <img src={photoPreview} alt="animal" className="photo-preview" />
                      : <><span className="upload-icon">📸</span><span className="upload-hint">{t.uploadHint}</span></>
                    }
                  </div>
                  <input ref={fileRef} type="file" accept="image/*" capture="environment" style={{ display: 'none' }} onChange={handlePhoto} />
                </div>

                {/* Symptoms */}
                <div className="form-section">
                  <label className="form-label">{t.symptoms}</label>
                  <p className="form-sublabel">{t.symptomHint}</p>
                  <div className="symptoms-grid">
                    {SYMPTOMS.map(s => (
                      <button
                        key={s}
                        className={`symptom-btn ${symptoms.includes(s) ? 'selected' : ''}`}
                        onClick={() => toggleSymptom(s)}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  className={`btn-diagnose ${(!animal || !symptoms.length) ? 'disabled' : ''}`}
                  onClick={handleDiagnose}
                  disabled={!animal || !symptoms.length}
                >
                  {t.submit} →
                </button>
              </div>
            ) : (
              <div>
                {analyzing && (
                  <div className="analyzing-screen">
                    <div className="spinner"></div>
                    <p>{t.analyzing}</p>
                  </div>
                )}

                {!analyzing && results && (
                  <div>
                    <div className="result-header">
                      <div className="result-animal">
                        {ANIMALS[animal]?.emoji} {ANIMALS[animal]?.label} — {breed}
                        {animalName && <span> · {animalName}</span>}
                      </div>
                      <button className="btn-new" onClick={resetForm}>+ {t.newCase}</button>
                    </div>

                    {results.length === 0 ? (
                      <div className="no-result card">
                        <p>No matching disease found for selected symptoms. Please consult a veterinarian.</p>
                        <div className="vet-list-inline">
                          {VETS.filter(v => v.available).slice(0, 3).map((v, i) => <VetCard key={i} vet={v} t={t} />)}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="results-intro card">
                          <h2 className="results-title">🩺 {t.diagnosis}</h2>
                          <p className="results-sub">{results.length} possible condition{results.length > 1 ? 's' : ''} identified · Call a vet to confirm</p>
                        </div>

                        {results.map((r, i) => (
                          <DiagnosisResult key={i} result={r} t={t} lang={lang} />
                        ))}

                        <div className="card vet-cta">
                          <h3 className="card-title">📞 {t.callVet}</h3>
                          {VETS.filter(v => v.available).slice(0, 3).map((v, i) => <VetCard key={i} vet={v} t={t} />)}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {analyzing && (
              <div className="analyzing-screen">
                <div className="spinner"></div>
                <p>{t.analyzing}</p>
              </div>
            )}
          </div>
        )}

        {/* ══ VETS TAB ══ */}
        {tab === 'vets' && (
          <div>
            <div className="card vets-header">
              <h2 className="card-title">👨‍⚕️ {t.nearbyVets}</h2>
              <p className="form-sublabel">Bengaluru & surrounding districts</p>
            </div>
            {VETS.map((v, i) => <VetCard key={i} vet={v} t={t} />)}
          </div>
        )}

        {/* ══ WEATHER TAB ══ */}
        {tab === 'weather' && <WeatherCard t={t} lang={lang} />}

        {/* ══ HISTORY TAB ══ */}
        {tab === 'history' && (
          <div>
            <div className="card history-header">
              <h2 className="card-title">📋 {t.history}</h2>
              <p className="form-sublabel">{history.length} cases recorded</p>
            </div>
            <HistoryPanel history={history} t={t} />
          </div>
        )}

      </main>

      <footer className="footer">
        <p>PashuAI · AI-assisted diagnosis · Always confirm with a licensed veterinarian</p>
      </footer>
    </div>
  );
}
