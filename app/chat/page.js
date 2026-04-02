"use client";

import { useEffect, useState } from "react";

export default function Chat(){

  const [user,setUser] = useState(null);
  const [msg,setMsg] = useState("");
  const [messages,setMessages] = useState([]);

  // vérifier utilisateur + charger messages
  useEffect(()=>{
    const data = localStorage.getItem("user");

    if(!data){
      window.location.href="/login";
    }else{
      setUser(JSON.parse(data));
    }

    loadMessages();

    const interval = setInterval(loadMessages, 2000);

    return ()=> clearInterval(interval);

  },[]);

  // envoyer message
  async function sendMessage(){

    if(!msg || !user) return;

    await fetch("/api/chat",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        user: user.name,
        message: msg
      })
    });

    setMsg("");
    loadMessages();
  }

  // charger messages
  async function loadMessages(){

    const res = await fetch("/api/chat");
    const data = await res.json();

    setMessages(data.messages);
  }

  // ajouter emoji
  function addEmoji(e){
    setMsg(msg + e);
  }

  if(!user) return null;

  return(
    <div className="container">

      <h1>💬 Chat Global</h1>

      <div className="chat-box">

        {messages.map((m,i)=>(
          <div key={i} className="message">
            <b>{m.user}:</b> {m.message}
          </div>
        ))}

      </div>

      <div className="input-box">

        <input
          value={msg}
          onChange={(e)=>setMsg(e.target.value)}
          placeholder="Écris ton message..."
        />

        <button onClick={sendMessage}>Envoyer</button>

      </div>

      <div className="emoji-box">
        <span onClick={()=>addEmoji("😏")}>😏</span>
        <span onClick={()=>addEmoji("😂")}>😂</span>
        <span onClick={()=>addEmoji("🔥")}>🔥</span>
        <span onClick={()=>addEmoji("❤️")}>❤️</span>
      </div>

      <br/>

      <a href="/dashboard">
        <button>⬅ Retour</button>
      </a>

    </div>
  );
                      }
