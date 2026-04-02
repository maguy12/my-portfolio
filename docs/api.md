# 🔥 API Documentation - Portfolio Octavio

---

## 🌍 Base URL

http://localhost:3000/api

---

# 🔐 AUTHENTIFICATION

## ➤ POST /register

Créer un nouvel utilisateur

### 📥 Body (JSON)

{
  "name": "Octavio",
  "email": "test@email.com",
  "password": "1234"
}

### 📤 Response (Succès)

{
  "message": "Compte créé 🔥"
}

### ❌ Response (Erreur)

{
  "message": "Email déjà utilisé ❌"
}

---

## ➤ POST /login

Connexion utilisateur

### 📥 Body (JSON)

{
  "email": "test@email.com",
  "password": "1234"
}

### 📤 Response (Succès)

{
  "message": "Connexion réussie 🔥",
  "user": {
    "id": 1,
    "name": "Octavio",
    "email": "test@email.com"
  }
}

### ❌ Response (Erreur)

{
  "message": "Identifiants incorrects ❌"
}

---

# 💬 CHAT

## ➤ GET /chat

Récupérer tous les messages

### 📤 Response

{
  "messages": [
    {
      "id": 1,
      "user": "Octavio",
      "message": "Bienvenue 🔥",
      "created_at": "2026-01-01"
    }
  ]
}

---

## ➤ POST /chat

Envoyer un message

### 📥 Body (JSON)

{
  "user": "Octavio",
  "message": "Salut 😏"
}

### 📤 Response

{
  "message": "Message envoyé 🔥"
}

---

# ⚠️ ERREURS GÉNÉRALES

## Champs manquants

{
  "message": "Champs manquants ❌"
}

## Erreur serveur

{
  "message": "Erreur serveur ❌"
}

---

# 🧠 STRUCTURE DES DONNÉES

## 👤 User

{
  "id": number,
  "name": string,
  "email": string,
  "password": string,
  "avatar": string
}

## 💬 Message

{
  "id": number,
  "user": string,
  "message": string,
  "created_at": string
}

---

# 🔒 SÉCURITÉ (À AMÉLIORER)

- ❌ mot de passe non hashé
- ❌ pas de JWT
- ❌ pas de validation avancée

✔ À ajouter :
- bcrypt (hash)
- JWT (auth)
- middleware sécurité

---

# 🚀 FUTURES AMÉLIORATIONS

- 💬 Chat temps réel (Socket.io)
- 📸 Upload image
- 🎥 Upload vidéo
- 😀 Emojis complet
- 👤 Profil utilisateur
- 🤖 Chatbot IA

---

# 📌 TECHNOLOGIES

- Next.js (App Router)
- Node.js API Routes
- SQLite Database
- HTML / CSS / JavaScript

---

# 👨‍💻 AUTEUR

Octavio 🚀
