"use client";

import { useState } from "react";
import Link from "next/link";

export default function Register(){

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  async function register(){

    console.log("CLICK REGISTER");

    if(!name || !email || !password){
      alert("Remplis tous les champs ❌");
      return;
    }

    try{
      const res = await fetch("/api/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({name,email,password})
      });

      const data = await res.json();

      console.log(data);

      alert(data.message);

      if(data.message.includes("créé")){
        window.location.assign("/login");
      }

    }catch(err){
      console.error(err);
      alert("Erreur serveur ❌");
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
        placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Mot de passe"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <button type="button" onClick={register}>
        S'inscrire
      </button>

      <p>Déjà un compte ?</p>

      <Link href="/login">
        <button type="button">Se connecter</button>
      </Link>

    </div>
  );
    }
