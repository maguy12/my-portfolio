"use client";

import { useState, useEffect } from "react";

export default function ChatBox({ user }){

  const [msg,setMsg] = useState("");
  const [messages,setMessages] = useState([]);

  useEffect(()=>{
    loadMessages();

    const interval = setInterval(loadMessages,2000);

    return ()=>clearInterval(interval);
  },[]);

  async function loadMessages(){
    const res = await fetch("/api/chat");
    const data = await res.json();
    setMessages(data.messages);
  }

  async function sendMessage(){

    if(!msg) return;

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

  function addEmoji(e){
    setMsg(msg + e);
  }

  return(
    <div>

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
          placeholder="Message..."
        />
        <button onClick={sendMessage}>Envoyer</button>
      </div>

      <div className="emoji-box">
        <span onClick={()=>addEmoji("😏")}>😏</span>
        <span onClick={()=>addEmoji("🔥")}>🔥</span>
        <span onClick={()=>addEmoji("😂")}>😂</span>
      </div>

    </div>
  );
            }
