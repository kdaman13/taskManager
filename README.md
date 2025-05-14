# MERN Task Manager App

## Overview
A full-stack Task Manager application built with the MERN stack (MongoDB, Express, React, Node.js). It supports user authentication, role-based access (admin/member), task management, file uploads, and report generation.

---

## Features
- User authentication (JWT-based)
- Role-based access: Admin and Member
- Admin can manage users and tasks
- Users can view and update their assigned tasks
- Task assignment, status, priority, due dates, attachments, and checklists
- File uploads for task attachments
- Downloadable reports (Excel)

---

## Tech Stack
- **Frontend:** React (Vite), CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB (Mongoose)
- **Authentication:** JWT
- **File Uploads:** Multer
- **Reports:** ExcelJS

---

## Folder Structure

```
├── backend
│   ├── config/         # Database connection
│   ├── controllers/    # Business logic for auth, users, tasks, reports
│   ├── middlewares/    # Auth and other middleware
│   ├── models/         # Mongoose schemas (User, Task)
│   ├── routes/         # API endpoints
│   ├── uploads/        # Uploaded files
│   ├── .env            # Environment variables
│   └── server.js       # Entry point
│
├── frontend
│   └── Task-Manager
│       ├── public/
│       ├── src/
│       │   ├── components/   # Reusable UI components
│       │   ├── context/      # React context for user state
│       │   ├── hooks/        # Custom hooks
│       │   ├── pages/        # Main pages (User, Admin, Auth)
│       │   ├── routes/       # Route definitions
│       │   └── utils/        # Helper functions, API paths
│       ├── package.json
│       └── vite.config.js
└── README.md
```

---

## Setup Instructions

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB (local or cloud)

### 1. Clone the repository
```bash
git clone <repo-url>
```

### 2. Backend Setup
```bash
cd backend
npm install
```

- Start the backend server:
  ```bash
  npm run dev
  # or
  npm start
  ```

### 3. Frontend Setup
```bash
cd ../frontend/Task-Manager
npm install
npm run dev
```
- The frontend will run on `http://localhost:5173` by default.

---

## Usage
- Visit `http://localhost:5173` in your browser.
- Register as a new user. To register as an admin, provide the correct **Admin Invite Token** during signup.
- Admins can manage users and tasks, and download reports.
- Users can view and update their assigned tasks.

---

## Report Download
- Admins can download task and user reports as Excel files from the admin dashboard.

---

## License
This project is for educational purposes.
