import { getDB } from "../../../lib/db";

export async function GET(){

  const db = await getDB();

  const messages = await db.all(
    "SELECT * FROM messages ORDER BY id ASC"
  );

  return Response.json({messages});
}

export async function POST(req){

  const { user, message } = await req.json();

  if(!user || !message){
    return Response.json({message:"Champs vides ❌"});
  }

  const db = await getDB();

  await db.run(
    "INSERT INTO messages(user,message) VALUES(?,?)",
    [user,message]
  );

  return Response.json({message:"Message envoyé 🔥"});
}
