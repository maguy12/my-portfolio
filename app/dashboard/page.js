"use client";

import { useEffect, useState } from "react";

export default function Dashboard(){

  const [user,setUser] = useState(null);

  useEffect(()=>{
    const data = localStorage.getItem("user");

    if(!data){
      window.location.href="/login";
    }else{
      setUser(JSON.parse(data));
    }
  },[]);

  function logout(){
    localStorage.removeItem("user");
    window.location.href="/login";
  }

  if(!user){
    return null;
  }

  return(
    <div className="container">

      <h1>🔥 Dashboard</h1>

      <h3>Bienvenue {user.name} 👋</h3>

      <div className="menu">

        <a href="/chat">
          <button>💬 Chat</button>
        </a>

        <a href="/calculator">
          <button>🧮 Calculatrice</button>
        </a>

        <a href="/snake">
          <button>🐍 Snake</button>
        </a>

      </div>

      <br/>

      <button onClick={logout}>
        🚪 Déconnexion
      </button>

    </div>
  );
    }
