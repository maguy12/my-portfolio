import sqlite3 from "sqlite3";
import { open } from "sqlite";

// singleton pour éviter plusieurs connexions
let db = null;

export async function getDB(){

  if(db) return db;

  db = await open({
    filename: "./database.db",
    driver: sqlite3.Database
  });

  // activer foreign keys (important)
  await db.exec("PRAGMA foreign_keys = ON");

  // création tables auto (pro)
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT UNIQUE,
      password TEXT,
      avatar TEXT
    )
  `);

  await db.exec(`
    CREATE TABLE IF NOT EXISTS messages(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user TEXT,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  return db;
}
