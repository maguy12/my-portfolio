"use client";

import { useEffect } from "react";

export default function Snake(){

  useEffect(()=>{

    const canvas = document.getElementById("game");
    const ctx = canvas.getContext("2d");

    let snake = [{x:10,y:10}];
    let food = {x:5,y:5};
    let dx = 1;
    let dy = 0;

    document.addEventListener("keydown",(e)=>{
      if(e.key==="ArrowUp"){dx=0;dy=-1;}
      if(e.key==="ArrowDown"){dx=0;dy=1;}
      if(e.key==="ArrowLeft"){dx=-1;dy=0;}
      if(e.key==="ArrowRight"){dx=1;dy=0;}
    });

    function draw(){
      ctx.fillStyle="#0f172a";
      ctx.fillRect(0,0,300,300);

      // snake
      ctx.fillStyle="lime";
      snake.forEach(s=>{
        ctx.fillRect(s.x*10,s.y*10,10,10);
      });

      // food
      ctx.fillStyle="red";
      ctx.fillRect(food.x*10,food.y*10,10,10);

      let head = {x:snake[0].x+dx, y:snake[0].y+dy};
      snake.unshift(head);

      if(head.x===food.x && head.y===food.y){
        food = {
          x:Math.floor(Math.random()*30),
          y:Math.floor(Math.random()*30)
        };
      }else{
        snake.pop();
      }
    }

    const game = setInterval(draw,100);

    return ()=> clearInterval(game);

  },[]);

  return(
    <div className="container">

      <h1>🐍 Snake</h1>

      <canvas id="game" width="300" height="300"></canvas>

      <p>Utilise les flèches ⬅➡⬆⬇</p>

      <a href="/dashboard">
        <button>⬅ Retour</button>
      </a>

    </div>
  );
      }
