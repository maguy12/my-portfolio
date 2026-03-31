"use client";

import { useState } from "react";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    if (!email || !password) {
      alert("Remplis les champs");
      return;
    }

    alert("Connexion OK 🔥 (backend après)");
  }

  return (
    <div className="container">

      <h1>🔐 Login</h1>

      <input 
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input 
        type="password"
        placeholder="Mot de passe"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={login}>Connexion</button>

    </div>
  );
    }
