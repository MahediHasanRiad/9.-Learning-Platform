# Tutor & Coaching Management Platform

A scalable platform that connects students, guardians, tutors, and coaching centers.
The system allows guardians to evaluate tutors through demo classes, ratings, and reviews before enrolling their children.

---

# Problem Statement

Finding a trustworthy tutor is difficult.
Guardians usually rely on word-of-mouth recommendations which are often unreliable.

This platform solves the problem by providing:

• Verified tutors
• Demo classes
• Transparent rating system
• Coaching center listings

---

# Key Features

### Student / Guardian

* Browse tutors
* Watch demo classes
* Compare tutor ratings
* Enroll in coaching batches

### Tutor

* Create tutor profile
* Upload demo classes
* Manage teaching batches
* Track enrolled students

### Coaching Center

* Manage teachers
* Create subjects
* Create batches
* Manage students

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

* JWT + Cookies

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

# API Example

POST /api/auth/register

Request

{
"name": "Riad",
"email": "[riad@gmail.com](mailto:riad@gmail.com)",
"password": "123456"
}

Response

{
"success": true,
"user": {}
}

---

# Database Design

User

name
email
mobile
avatar
role

Teacher

userId
subjects
rating

Coaching

name
teachers
subjects

Batch

name
teacher
students

---

# Installation

Clone repository

git clone https://github.com/username/project.git

Backend

cd backend
npm install
npm run dev

Frontend

cd frontend
npm install
npm run dev

---

# Future Improvements

• Online live classes
• Payment gateway
• AI tutor recommendation
• Mobile application

---

# Author

Riad
Full Stack Developer
