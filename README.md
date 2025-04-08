# PostgreSQL CRUD API with Node.js

A simple RESTful API built with Node.js, Express, and PostgreSQL for managing student records. This application demonstrates basic CRUD (Create, Read, Update, Delete) operations using a PostgreSQL database.

## Features

- Get all students
- Get student by ID
- Add new student with email validation
- Update student information
- Delete student by ID

## Prerequisites

- Node.js (v20.x or later)
- PostgreSQL (v14.x or later)
- npm (Node Package Manager)

## Database Setup

1. Create a PostgreSQL database named `students`
2. Create a table with the following structure:

```sql
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    age INTEGER,
    dob DATE
);
```

## Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Configure database connection in `db.js`:
```javascript
{
    user: "postgres",
    host: "localhost",
    database: "students",
    password: "password",
    port: 5432
}
```

## Running the Application

Start the server:
```bash
node server.js
```

The server will start on http://localhost:3000

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/v1/students | Get all students |
| GET | /api/v1/students/:id | Get student by ID |
| POST | /api/v1/students | Add new student |
| PUT | /api/v1/students/:id | Update student name |
| DELETE | /api/v1/students/:id | Delete student |

### Request Body Examples

Add Student (POST):
```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "age": 20,
    "dob": "2003-01-01"
}
```

Update Student (PUT):
```json
{
    "name": "John Smith"
}
```

## Dependencies

- Express.js - Web application framework
- pg - PostgreSQL client for Node.js