"use client";

export default function Navbar(){

  function logout(){
    localStorage.removeItem("user");
    window.location.href="/login";
  }

  return(
    <div className="navbar">

      <h2>🔥 Octavio</h2>

      <div className="nav-links">

        <a href="/dashboard">Dashboard</a>
        <a href="/chat">Chat</a>
        <a href="/calculator">Calc</a>
        <a href="/snake">Snake</a>

      </div>

      <button onClick={logout}>Logout</button>

    </div>
  );
    }
