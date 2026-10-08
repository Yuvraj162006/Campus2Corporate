# Campus2Corporate 🎓💼

### A Full-Stack Placement Management Platform

Campus2Corporate is a **MERN-based placement management platform** designed to bring **students, colleges, recruiters, and administrators** together on a single platform.

The platform aims to simplify and digitize the complete campus placement lifecycle — from **student profile management and job applications to recruiter shortlisting and college placement management**.

---

## 🚀 Project Overview

Traditional campus placement processes often involve multiple disconnected systems for student information, job opportunities, applications, eligibility checking, and placement tracking.

**Campus2Corporate** provides a centralized platform where:

- 👨‍🎓 Students can manage their profiles, skills and job applications.
- 🏫 Colleges can manage placement activities and monitor student progress.
- 💼 Recruiters can post opportunities, review eligible candidates and shortlist students.
- 👨‍💻 Administrators can manage users and platform operations.

The project follows a **role-based architecture**, where each user gets access to features and workflows according to their role.

---

## ✨ Key Features

### 👨‍🎓 Student Module

- Student profile management
- Skills and academic information
- View available job opportunities
- Apply for eligible jobs
- Track application status
- Placement activity tracking

### 🏫 College Module

- Manage student information
- Monitor student placement progress
- Manage placement drives
- Track applications and placement activities
- View student profiles and placement status

### 💼 Recruiter Module

- Recruiter profile management
- Create and manage job opportunities
- Define job requirements and eligibility criteria
- View candidate profiles
- Shortlist eligible candidates
- Manage recruitment workflow

### 🛡️ Admin Module

- User management
- Role-based platform administration
- Monitor system activities
- Manage different platform modules

---

## 🔐 Authentication & Authorization

Campus2Corporate implements secure authentication and role-based authorization.

### Authentication

- JWT-based authentication
- Secure login and registration
- Protected routes
- Token-based API authorization

### Role-Based Access Control

Different users have different permissions:

```text
                    Campus2Corporate
                           │
          ┌────────────────┼────────────────┐
          │                │                │
       Student          Recruiter         College
          │                │                │
      Profile          Job Posts       Placement
      Jobs             Candidates      Management
      Applications     Shortlisting    Students
                           │
                           │
                         Admin
                           │
                    Platform Control
