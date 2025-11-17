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


JWT (jose or jsonwebtoken) — token signing & verifying


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


📦 Installation
Clone the repository:
git clone https://github.com/yourname/auth-backend.git
cd auth-backend

Install dependencies:
npm install


▶️ Run the Server
Development:
npm run dev

Production:
npm start

Server runs at:
http://localhost:5000

📡 API Endpoints

🟦 Register User
POST /api/register
Request Body
{
  "name": "Houssama",
  "email": "test@example.com",
  "password": "123456"
}

Response
{
  "message": "User registered successfully",
  "user": {
    "id": "65fbc...",
    "email": "test@example.com"
  }
}


🟩 Login User
POST /api/login
Request Body
{
  "email": "test@example.com",
  "password": "123456"
}

Response
{
  "message": "Login successful",
  "token": "jwt_token_here"
}


🟧 Protected Route (Example)
GET /api/me
Requires JWT in the Authorization header:
Authorization: Bearer your_jwt_token


🔗 Connecting From Next.js Frontend

🔑 Login Request (fetch)
const res = await fetch("http://localhost:5000/api/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ email, password }),
});

const data = await res.json();
console.log(data);


📝 Register Request (fetch)
await fetch("http://localhost:5000/api/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name, email, password }),
});


🛡 Use Token in Next.js
const token = localStorage.getItem("token");

await fetch("http://localhost:5000/api/me", {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});


🧪 Testing With Postman
You can test:


POST /api/register


POST /api/login


GET /api/me (with JWT token)



📜 License
MIT License © 2025
Developed by Houssama El Bandoudi

If you want, I can also generate:
✅ Full backend code
✅ A frontend README
✅ API table documentation
✅ Badges & styling
Just say "Give me the advanced README".
