# Tutor & Coaching Management Platform

A scalable platform that connects students, guardians, tutors, and coaching centers.
The system allows guardians to evaluate tutors through demo classes, ratings, and reviews before enrolling their children.

---

# Problem Statement

Finding a trustworthy tutor and also course is difficult.
Guardians usually rely on word-of-mouth recommendations which are often unreliable.

This platform solves the problem by providing:

• Verified tutors
• Demo classes
• Transparent rating system
• Coaching center listings
• contact with them directly
• watch review from real students

---

# Key Features

### Student / Guardian

* Browse tutors
* filtered based on Switable time / Fee / Location
* Watch demo classes
* Compare tutor ratings
* Enroll in coaching batches
* check batch rating

### Tutor

* Create tutor profile
* Upload demo classes
* Manage teaching batches
* Track enrolled students
* Stablish as a Teacher Digital Protfolio

### Coaching Center

* Manage teachers
* Create subjects
* Create batches
* Manage students
* Stablish as a Digital Protfolio

---

# Tech Stack

Frontend

* React
* Redux Toolkit
* React Router

Backend

* Node.js
* Express.js

Database

* MongoDB
* Mongoose

Media Storage

* Cloudinary

Authentication

* JWT + Cookies + auth0

---

# System Architecture

Client (React)

↓

API Layer (Express)

↓

Business Logic (Services)

↓

Database (MongoDB)

---

API Example

Register User

POST /api/auth/register
Request Body
{
  "name": "Riad",
  "email": "riad@gmail.com",
  "password": "123456"
}
Response
{
  "success": true,
  "user": {
    "_id": "user_id",
    "name": "Riad",
    "email": "riad@gmail.com"
  }
}


---

Database Design
User Model
Field	Type	Description
name	String	User full name
email	String	User email
mobile	String	User phone number
avatar	String	Profile image
role	String	User role (User / Teacher / CoachingOwner)

---

## Installation

Clone repository

```bash
  git clone https://github.com/username/project.git
```
Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Backend

```bash
  cd backend
  npm install
  npm run dev
```

Frontend

```bash
  cd frontend
  npm install
  npm run dev
```
    
---

## Future Improvements

- Online live classes
- Payment gateway
- AI tutor recommendation
- Mobile application


---

# Author

Riad
Full Stack Developer
