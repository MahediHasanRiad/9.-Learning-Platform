# 📚 TutorConnect — Tutor & Coaching Management Platform

> A scalable platform that connects students, guardians, tutors, and coaching centers — making quality education accessible and trustworthy.

---

## 🧩 Problem Statement

Finding a reliable tutor is harder than it should be. Guardians typically rely on word-of-mouth recommendations, which are inconsistent and unverifiable.

**TutorConnect** solves this by providing:

- ✅ Verified tutor profiles
- 🎥 Demo classes before enrollment
- ⭐ Transparent rating & review system
- 🏫 Coaching center listings with batch management
- 💬 Direct contact between guardians and tutors

---

## ✨ Key Features

### 👨‍👩‍👧 Student / Guardian
- Browse and filter tutors by time, fee, and location
- Watch demo classes before committing
- Compare tutor ratings and read verified reviews
- Enroll in coaching center batches
- View batch ratings and student feedback

### 👨‍🏫 Tutor
- Create and manage a professional tutor profile
- Upload demo classes to attract students
- Manage teaching batches and enrolled students
- Build a verified digital teaching portfolio

### 🏛️ Coaching Center
- Manage teachers and assign subjects
- Create and oversee student batches
- Track student enrollment and progress
- Establish an online digital presence

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React, Redux Toolkit, React Router |
| **Backend** | TypeScript, Node.js, Express.js |
| **Database** | MongoDB, Mongoose, PostgreSQL |
| **Media Storage** | Cloudinary |
| **Authentication** | JWT + Cookies + Auth0 |

---

## 🏗️ System Architecture

```
Client (React)
      ↓
API Layer (Express.js)
      ↓
Business Logic (Services)
      ↓
Database (PostgreSQL)
```

---

## 📡 API Reference

### Auth

#### Register User

```http
POST /api/auth/register
```

**Request Body:**

```json
{
  "name": "Riad",
  "email": "riad@example.com",
  "password": "securepassword"
}
```

**Response:**

```json
{
  "success": true,
  "user": {
    "_id": "user_id",
    "name": "Riad",
    "email": "riad@example.com"
  }
}
```

---

## 🗄️ Database Design

### User Model

| Field | Type | Description |
|---|---|---|
| `name` | String | Full name of the user |
| `email` | String | Unique email address |
| `mobile` | String | Contact phone number |
| `avatar` | String | Profile image URL (Cloudinary) |
| `role` | String | `user` / `teacher` / `coachingOwner` |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- PostgreSQL instance (local or Atlas)
- Cloudinary account

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/username/tutorconnect.git
cd tutorconnect
```

**2. Set up the backend**

```bash
cd backend
npm install
cp .env.example .env  
npm run dev
```

**3. Set up the frontend**

```bash
cd frontend
npm install
npm run dev
```

---

## 🔮 Roadmap

- [ ] Notification
- [ ] Logging
- [ ] Integrated payment gateway


---

## 👨‍💻 Author

**Mahedi Hasan Riad**  
Full Stack Developer — TypeScript · Node.js · React · PostgreSQL  
