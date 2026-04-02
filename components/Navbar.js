"use client";

import { usePathname } from "next/navigation";

export default function Navbar(){

  const path = usePathname();

  function logout(){
    localStorage.removeItem("user");
    window.location.href="/login";
  }

  function isActive(route){
    return path === route ? "active" : "";
  }

  return(
    <div className="navbar">

      {/* LOGO */}
      <div className="logo">
        <img src="/logo.png" alt="logo" />
        <span>Octavio</span>
      </div>

      {/* MENU */}
      <div className="nav-links">

        <a href="/dashboard" className={isActive("/dashboard")}>
          Dashboard
        </a>

        <a href="/chat" className={isActive("/chat")}>
          Chat
        </a>

        <a href="/calculator" className={isActive("/calculator")}>
          Calc
        </a>

        <a href="/snake" className={isActive("/snake")}>
          Snake
        </a>

      </div>

      {/* ACTION */}
      <button onClick={logout}>
        Logout
      </button>

    </div>
  );
    }
