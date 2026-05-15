EventEase: Event Management System Using MERN Stack

Project Overview

EventEase is a comprehensive multi-vendor event management platform designed to connect customers with event service providers (Vendors) . From venues and catering to photography and decor, the platform allows users to browse, compare, and book services with ease.
The system features a secure payment gateway for advance bookings, real-time communication between parties, and a robust administrative command center.
The project is built using the MERN Stack:
● Frontend: React.js
● Backend API: Node.js + Express.js
● Database: MongoDB (Atlas)
● Real-time Communication: Socket.io

Project Structure

EventEase/
│
├── frontend/ # React.js User Interface
├── backend/ # Express.js & Node.js API
├── models/ # MongoDB Schemas (User, Vendor, Booking, Chat)
└── README.md

Prerequisites

Ensure the following are installed on your system:
● Node.js (v16 or above)
● npm
● MongoDB Atlas Account
● Cloudinary Account (for media storage)
● Stripe Account (for payment processing)
Environment Setup
Create a .env file inside the backend folder and add:

Code snippet

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
STRIPE_SECRET_KEY=your_stripe_key
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

How to Run the Project
Step 1: Run Backend

Bash

cd backend
npm install
npm run dev

The server will run on: http://localhost:5000
Step 2: Run Frontend

Bash

cd frontend
npm install
npm start

The application will be accessible at: http://localhost:3000
Key Features

● Multi-Role Access (RBAC): Separate dashboards for Admin, Vendors, and Customers.
● Vendor Verification: Admin-controlled approval system for service providers.
● Advanced Search & Filter: Find vendors by category, city, or budget .
● Real-time Chat: Instant messaging between customers and vendors via Socket.io.
● Media Portfolios: High-quality image and video hosting using Cloudinary.
● Booking Management: Real-time availability tracking and status updates (Pending/Confirmed).
● Secure Payments: 30% advance payment processing integrated with Stripe.
● Review & Rating: Post-event feedback system for quality assurance.
Security & Reliability
● Password Encryption: Using Bcrypt.js for secure data storage.
● Authentication: JSON Web Tokens (JWT) for session management.
● Data Validation: Mongoose schemas to ensure data integrity.
● CORS Enabled: Secure cross-origin resource sharing between frontend and backend.

Developers

● Ayesha Bibi (085656)
● Asma Noreen (085710)
● Mahroosh (085649)
Supervised by: Prof. Muhammad Faiyaz
