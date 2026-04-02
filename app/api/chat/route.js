import { getDB } from "../../../lib/db.js";

export async function GET(){

  const db = await getDB();

  const messages = await db
    .collection("messages")
    .find()
    .toArray();

  return Response.json({messages});
}

export async function POST(req){

  const { user, message } = await req.json();

  if(!user || !message){
    return Response.json({message:"Champs vides ❌"});
  }

  const db = await getDB();

  await db.collection("messages").insertOne({
    user,
    message,
    created_at: new Date()
  });

  return Response.json({message:"Message envoyé 🔥"});
}
