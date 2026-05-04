# RunFlow Database API

Backend API developed as Project 3 for the DecodeLabs Full Stack Internship.

## 🚀 Technologies

* Node.js
* Express.js
* SQLite3

## ✨ Features

* SQLite database integration
* Simple schema design
* Full CRUD operations
* JSON request and response handling
* Basic validation
* Parameterized SQL queries (secure)

## 📊 Database Schema

Table: `runners`

* `id` — INTEGER PRIMARY KEY AUTOINCREMENT
* `name` — TEXT NOT NULL
* `goal` — TEXT NOT NULL

## ⚙️ How to Run

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
node server.js
```

3. Server runs on:

```text
http://localhost:3000
```

## 🔗 Frontend Integration

This API is consumed by the RunFlow frontend:

👉 https://github.com/brotherson10/runflow-frontend

The frontend uses this API to:

* Fetch runners from the database
* Display runners dynamically
* Create new runners through a form

## 🧠 What I Learned

* Backend and database integration
* Schema design and data persistence
* CRUD operations with real database
* API development with Express
* Error handling and validation

## 👨‍💻 Author

Brotherson Américo

GitHub: https://github.com/brotherson10
LinkedIn: https://www.linkedin.com/in/brotherson/
