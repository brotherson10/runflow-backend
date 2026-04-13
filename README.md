# RunFlow Database API

Backend API developed as Project 3 for the DecodeLabs Full Stack Internship.

## Technologies

* Node.js
* Express.js
* SQLite3

## Features

* Database integration with SQLite
* Simple schema design
* Full CRUD operations
* JSON request and response handling
* Basic data validation
* Parameterized SQL queries

## Database Schema

Table: `runners`

Fields:

* `id` - INTEGER PRIMARY KEY AUTOINCREMENT
* `name` - TEXT NOT NULL
* `goal` - TEXT NOT NULL

## API Endpoints

### GET /

Checks if the API is running.

### GET /runners

Returns all runners.

### GET /runners/:id

Returns one runner by ID.

### POST /runners

Creates a new runner.

Example body:

```json
{
  "name": "John",
  "goal": "10km"
}
```

### PUT /runners/:id

Updates an existing runner.

Example body:

```json
{
  "name": "John Updated",
  "goal": "21km"
}
```

### DELETE /runners/:id

Deletes a runner by ID.

## Learning Objectives

This project demonstrates:

* backend and database integration
* schema design
* CRUD operations
* proper data handling
* secure parameterized SQL queries

## Author

Brotherson Américo
