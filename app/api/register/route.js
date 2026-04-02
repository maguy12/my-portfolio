import { getDB } from "../../../lib/db.js";

export async function POST(req){

  const { name, email, password } = await req.json();

  if(!name || !email || !password){
    return Response.json({message:"Champs manquants ❌"});
  }

  const db = await getDB();

  const exist = await db.collection("users").findOne({email});

  if(exist){
    return Response.json({message:"Email déjà utilisé ❌"});
  }

  await db.collection("users").insertOne({
    name,
    email,
    password
  });

  return Response.json({message:"Compte créé 🔥"});
}
