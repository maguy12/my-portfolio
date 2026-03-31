import { getDB } from "@/lib/db";

export async function POST(req){

  const { email, password } = await req.json();

  if(!email || !password){
    return Response.json({message:"Champs manquants ❌"});
  }

  const db = await getDB();

  const user = await db.get(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email,password]
  );

  if(!user){
    return Response.json({message:"Identifiants incorrects ❌"});
  }

  return Response.json({
    message:"Connexion réussie 🔥",
    user
  });
      }
