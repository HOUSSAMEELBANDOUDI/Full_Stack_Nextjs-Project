🔐 Authentication API

A complete RESTful Authentication API built with Node.js, Express, and MongoDB (Mongoose) for managing users.
This backend is designed to connect easily with a Next.js frontend using fetch().

🚀 Features

📝 User Registration

🔑 User Login

🎫 JWT Authentication

🔒 Secure Password Hashing (bcrypt)

🛡 Middleware for Auth Verification

🗄 MongoDB Database Using Mongoose

🌐 CORS Enabled for Next.js Integration

❗ Error Handling Middleware

📡 Fully Compatible with REST Clients (Postman, Thunder Client)

🛠️ Tech Stack

Node.js

Express.js

MongoDB + Mongoose

JWT (jose or jsonwebtoken)

bcryptjs — password hashing

dotenv — environment variables

cors — cross-origin support

morgan — HTTP logging (optional)

📁 Project Structure

auth-backend/
│── controllers/
│── middleware/
│── models/
│── routes/
│── server.js
│── .env
│── package.json
│── README.md


⚙️ Environment Variables

Create a .env file at the project root:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key_here
CLIENT_URL=http://localhost:3000


