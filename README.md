# PashuAI — AI Veterinary Assistant App

## ✅ STEP-BY-STEP: How to Run in VS Code

### Step 1 — Install Node.js
1. Go to https://nodejs.org
2. Download and install the **LTS version** (e.g., 18.x or 20.x)
3. After install, open a terminal and verify:
   ```
   node --version
   npm --version
   ```

### Step 2 — Open this project in VS Code
1. Open VS Code
2. Go to **File → Open Folder**
3. Select the `pashuai` folder (the one containing this README)

### Step 3 — Open the Terminal in VS Code
- Press `` Ctrl + ` `` (backtick) OR go to **Terminal → New Terminal**

### Step 4 — Install dependencies
In the terminal, type:
```
npm install
```
Wait for it to finish (takes 1–2 minutes first time).

### Step 5 — Start the app
```
npm start
```
The browser will open automatically at **http://localhost:3000**

---

## 🌟 Features

| Feature | Description |
|---|---|
| 🐄🐃🐐🐑🐔🐷🐴🐕 | All major Indian livestock animals with local breeds |
| 📸 Photo Upload | Upload/take photo of sick animal |
| 🔬 AI Diagnosis | Symptom-based disease matching (10+ diseases) |
| 🩺 First Aid | Step-by-step life-saving instructions until vet arrives |
| 💊 Medicine | Suggested treatments (to verify with vet) |
| 🔊 Audio | Text-to-speech diagnosis in selected language |
| 🌤️ Weather | Live weather + animal health tips |
| 👨‍⚕️ Vet Contact | Nearby vet directory with direct call buttons |
| 📋 History | All past cases saved locally |
| 🌐 Languages | English, ಕನ್ನಡ, हिंदी, తెలుగు, தமிழ், മലയാളം |

## 🦠 Diseases Covered
1. Rabies
2. Foot and Mouth Disease (FMD)
3. Mastitis
4. Haemorrhagic Septicaemia (HS)
5. Bloat / Tympany
6. PPR (Goat/Sheep Plague)
7. Newcastle / Ranikhet Disease (Poultry)
8. Brucellosis
9. Diarrhoea / Scours
10. Mange / Skin Disease

## 📁 Project Structure
```
pashuai/
├── public/
│   └── index.html
├── src/
│   ├── data/
│   │   └── livestock.js    ← All breeds, diseases, vets, languages
│   ├── App.js              ← Main app with all components
│   ├── App.css             ← All styling
│   └── index.js            ← Entry point
├── package.json
└── README.md
```

## 🔧 To Customize
- **Add more vets**: Edit `src/data/livestock.js` → `VETS` array
- **Add more diseases**: Edit `src/data/livestock.js` → `DISEASE_DB` array
- **Change language strings**: Edit `LANGUAGES` object in `livestock.js`

## ⚠️ Important
This app is an AI assistant tool only. Always confirm diagnosis with a licensed veterinarian.
