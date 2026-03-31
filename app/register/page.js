"use client";

import { useState } from "react";

export default function Register(){

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [avatar,setAvatar] = useState(null);

  function handleImage(e){
    const file = e.target.files[0];
    setAvatar(file);
  }

  function register(){

    if(!name || !email || !password){
      alert("Remplis tous les champs ❌");
      return;
    }

    // simulation stockage
    const user = {
      name,
      email,
      password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Compte créé 🔥");

    window.location.href="/login";
  }

  return(
    <div className="container">

      <h1>📝 Inscription</h1>

      <input 
        placeholder="Nom"
        onChange={(e)=>setName(e.target.value)}
      />

      <input 
        placeholder="Email ou numéro"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input 
        type="password"
        placeholder="Mot de passe"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <input 
        type="file"
        accept="image/*"
        onChange={handleImage}
      />

      <button onClick={register}>
        S'inscrire
      </button>

      <p>Déjà un compte ?</p>

      <a href="/login">
        <button>Se connecter</button>
      </a>

    </div>
  );
      }
