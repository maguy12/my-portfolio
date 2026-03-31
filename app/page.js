"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="ball"></div>
        <div className="dots">
          <span>.</span><span>.</span><span>.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>🔥 Portfolio Octavio</h1>
      <a href="/login">
        <button>Entrer</button>
      </a>
    </div>
  );
      }
