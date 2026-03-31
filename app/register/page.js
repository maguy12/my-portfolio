"use client";

import { useState } from "react";

export default function Register(){

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  async function register(){

    if(!name || !email || !password){
      alert("Remplis tous les champs ❌");
      return;
    }

    const res = await fetch("/api/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({name,email,password})
    });

    const data = await res.json();

    alert(data.message);

    if(data.message.includes("créé")){
      window.location.href="/login";
    }
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
