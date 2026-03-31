"use client";

import { useState } from "react";

export default function Login(){

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  async function login(){

    if(!email || !password){
      alert("Remplis les champs ❌");
      return;
    }

    const res = await fetch("/api/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({email,password})
    });

    const data = await res.json();

    if(data.user){
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href="/dashboard";
    }else{
      alert(data.message);
    }
  }

  return(
    <div className="container">

      <h1>🔐 Connexion</h1>

      <input 
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input 
        type="password"
        placeholder="Mot de passe"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button onClick={login}>
        Connexion
      </button>

      <p>Pas encore de compte ?</p>

      <a href="/register">
        <button>S'inscrire</button>
      </a>

    </div>
  );
    }
