# 🍅 Tomato — Food Delivery App

A full-stack food delivery web application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). Users can browse a menu, add items to cart, place orders, and make payments. Includes a separate admin panel to manage food items and track orders.

---

## 🚀 Live Demo

| App | Link |
|-----|------|
| **Frontend** (Customer) | [frontend-liard-nine-27.vercel.app](https://frontend-liard-nine-27.vercel.app/) |
| **Admin Panel** | [food-delivery-kappa-navy.vercel.app](https://food-delivery-kappa-navy.vercel.app/) |
| **Backend API** | [food-delivery-tck4.onrender.com](https://food-delivery-tck4.onrender.com/) |

---

## 📁 Project Structure

```
food-del/
├── frontend/       # React (Vite) — Customer-facing app
├── admin/          # React (Vite) — Admin dashboard
└── backend/        # Node.js + Express — REST API server
```

---

## ✨ Features

### 🛒 Customer App (Frontend)
- Browse food items across 8 categories — Salad, Rolls, Deserts, Sandwich, Cake, Pure Veg, Pasta, Noodles
- Search for dishes by name
- Add/remove items to cart with quantity control
- User authentication (Sign Up / Login)
- Place orders with delivery details
- Stripe payment integration
- Track order status
- Fully responsive design

### 🔧 Admin Panel
- Add new food items with image upload
- View and manage all food listings
- Update order status (Processing → Out for Delivery → Delivered)

### ⚙️ Backend API
- RESTful API with Express.js
- MongoDB Atlas database with Mongoose ODM
- JWT-based authentication
- Image upload with Multer
- Stripe payment gateway integration
- CORS enabled for cross-origin requests

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React, Vite, Axios, CSS |
| **Admin** | React, Vite, Axios, CSS |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas (Mongoose) |
| **Auth** | JWT (JSON Web Tokens), bcrypt |
| **Payments** | Stripe |
| **File Upload** | Multer |
| **Deployment** | Vercel (Frontend & Admin), Render (Backend) |

---

## 🏗️ Getting Started (Local Development)

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account (or local MongoDB)
- Stripe account (for payments)

### 1. Clone the repository

```bash
git clone https://github.com/anshuman2027843/food-delivery.git
cd food-delivery
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:

```env
JWT_SECRET=your_jwt_secret
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/food-del?appName=Cluster0
STRIPE_SECRET_KEY=your_stripe_secret_key
```

```bash
# Seed the database with 32 food items
node seed.js

# Start the server
npm start
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in `frontend/`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

```bash
npm run dev
```

### 4. Admin Panel Setup

```bash
cd admin
npm install
```

Create a `.env` file in `admin/`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

```bash
npm run dev
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/food/list` | Get all food items |
| `POST` | `/api/food/add` | Add a new food item |
| `POST` | `/api/food/remove` | Remove a food item |
| `POST` | `/api/user/register` | Register a new user |
| `POST` | `/api/user/login` | User login |
| `POST` | `/api/cart/add` | Add item to cart |
| `POST` | `/api/cart/remove` | Remove item from cart |
| `POST` | `/api/cart/get` | Get cart data |
| `POST` | `/api/order/place` | Place a new order |
| `POST` | `/api/order/userorders` | Get user's orders |
| `GET` | `/api/order/list` | Get all orders (admin) |
| `POST` | `/api/order/status` | Update order status |

---

## 👤 Author

**Anshuman Singla**
- GitHub: [@anshuman2027843](https://github.com/anshuman2027843)

---

## 📄 License

This project is licensed under the ISC License.
