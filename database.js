const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./database.sqlite", (error) => {
  if (error) {
    console.error("Database connection error:", error.message);
  } else {
    console.log("Connected to SQLite database.");
  }
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS runners (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    goal TEXT NOT NULL
    )
  `);
});

module.exports = db;