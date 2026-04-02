import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

let client;
let db;

export async function getDB(){

  if(!uri){
    throw new Error("MONGODB_URI manquant ❌");
  }

  if(db) return db;

  client = new MongoClient(uri);
  await client.connect();

  db = client.db("portfolio");

  return db;
}
