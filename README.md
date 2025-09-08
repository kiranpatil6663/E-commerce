MERN E-Commerce Project

A simple e-commerce web application built with MERN stack (MongoDB, Express.js, React.js, Node.js).

Features

User signup and login with JWT authentication

Browse items with filters (price, category)
Add and remove items from cart
CRUD operations for items

⚠️ Note: Some features may not be fully polished due to limited time, but the core functionality works.

Getting Started
Prerequisites

Node.js (v18 or above recommended)

npm Installation



Backend:

cd backend
npm install
# Add .env file with MongoDB URI and JWT_SECRET
nodemon server.js


Frontend:

cd frontend
npm install
npm run dev

Folder Structure

backend/ – Node.js + Express backend, APIs, models

frontend/ – React frontend, components, pages

frontend/.env – Environment variables for frontend (backend URL, etc.)

Usage

Open http://localhost:5173 in your browser

Signup/login, browse items, add/remove from cart
