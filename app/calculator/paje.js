"use client";

import { useState } from "react";

export default function Calculator(){

  const [value,setValue] = useState("");

  function add(v){
    setValue(value + v);
  }

  function clear(){
    setValue("");
  }

  function calc(){
    try{
      setValue(eval(value).toString());
    }catch{
      setValue("Erreur");
    }
  }

  return(
    <div className="container">

      <h1>🧮 Calculatrice</h1>

      <input value={value} readOnly />

      <div className="grid">

        <button onClick={()=>add("7")}>7</button>
        <button onClick={()=>add("8")}>8</button>
        <button onClick={()=>add("9")}>9</button>
        <button onClick={()=>add("/")}>/</button>

        <button onClick={()=>add("4")}>4</button>
        <button onClick={()=>add("5")}>5</button>
        <button onClick={()=>add("6")}>6</button>
        <button onClick={()=>add("*")}>*</button>

        <button onClick={()=>add("1")}>1</button>
        <button onClick={()=>add("2")}>2</button>
        <button onClick={()=>add("3")}>3</button>
        <button onClick={()=>add("-")}>-</button>

        <button onClick={()=>add("0")}>0</button>
        <button onClick={clear}>C</button>
        <button onClick={calc}>=</button>
        <button onClick={()=>add("+")}>+</button>

      </div>

      <br/>

      <a href="/dashboard">
        <button>⬅ Retour</button>
      </a>

    </div>
  );
}
