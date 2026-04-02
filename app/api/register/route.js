import { getDB } from "../../../lib/db";

export async function POST(req){

  const { name, email, password } = await req.json();

  if(!name || !email || !password){
    return Response.json({message:"Champs manquants ❌"});
  }

  const db = await getDB();

  const exist = await db.get(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if(exist){
    return Response.json({message:"Email déjà utilisé ❌"});
  }

  await db.run(
    "INSERT INTO users(name,email,password) VALUES(?,?,?)",
    [name,email,password]
  );

  return Response.json({message:"Compte créé 🔥"});
}
