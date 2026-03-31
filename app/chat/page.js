"use client";

import { useEffect, useState } from "react";

export default function Chat(){

  const [user,setUser] = useState(null);
  const [msg,setMsg] = useState("");
  const [messages,setMessages] = useState([]);

  useEffect(()=>{
    const data = localStorage.getItem("user");

    if(!data){
      window.location.href="/login";
    }else{
      setUser(JSON.parse(data));
    }

    // charger anciens messages
    const saved = localStorage.getItem("messages");
    if(saved){
      setMessages(JSON.parse(saved));
    }
  },[]);

  function sendMessage(){
    if(!msg) return;

    const newMsg = {
      user: user.name,
      text: msg
    };

    const newList = [...messages, newMsg];

    setMessages(newList);
    localStorage.setItem("messages", JSON.stringify(newList));
    setMsg("");
  }

  function addEmoji(emoji){
    setMsg(msg + emoji);
  }

  if(!user) return null;

  return(
    <div className="container">

      <h1>💬 Chat</h1>

      <div className="chat-box">
        {messages.map((m,i)=>(
          <div key={i} className="message">
            <b>{m.user}:</b> {m.text}
          </div>
        ))}
      </div>

      <div className="input-box">

        <input 
          value={msg}
          onChange={(e)=>setMsg(e.target.value)}
          placeholder="Écris un message..."
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
