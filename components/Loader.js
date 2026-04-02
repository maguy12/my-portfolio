"use client";

import { useEffect, useState } from "react";

export default function Loader(){

  const [show,setShow] = useState(true);

  useEffect(()=>{
    const timer = setTimeout(()=>{
      setShow(false);
    },3000);

    return ()=>clearTimeout(timer);
  },[]);

  if(!show) return null;

  return(
    <div className="loader">

      <div className="ball"></div>

      <div className="dots">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>

    </div>
  );
    }
