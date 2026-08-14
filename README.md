# Tomato — Full-Stack MERN Food Delivery & Management Platform

[![Frontend Deployment](https://img.shields.io/badge/Frontend-Live%20Demo-brightgreen?style=for-the-badge&logo=vercel)](https://frontend-eta-blue-65.vercel.app)
[![Admin Panel](https://img.shields.io/badge/Admin%20Panel-Live%20Demo-blue?style=for-the-badge&logo=vercel)](https://admin-tau-nine-19.vercel.app)
[![Backend API](https://img.shields.io/badge/Backend%20API-Render-black?style=for-the-badge&logo=render)](https://food-del-backend-lpc8.onrender.com)
[![Database](https://img.shields.io/badge/Database-MongoDB%20Atlas-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)

A modern, scalable, full-stack food delivery web application built using the **MERN (MongoDB, Express.js, React.js, Node.js) Stack**. The platform provides an end-to-end e-commerce food ordering workflow featuring real-time menu exploration, persistent cart management, JWT authentication, Stripe payment processing, order lifecycle tracking, and a dedicated admin management portal.

---

## 🔗 Live Application Links

- **Customer Web App (Frontend):** [https://frontend-eta-blue-65.vercel.app](https://frontend-eta-blue-65.vercel.app)
- **Admin Management Portal:** [https://admin-tau-nine-19.vercel.app](https://admin-tau-nine-19.vercel.app)
- **Backend REST API:** [https://food-del-backend-lpc8.onrender.com](https://food-del-backend-lpc8.onrender.com)

---

## 🚀 Key Features

### 🛒 Customer-Facing Web Application
- **Dynamic Menu Discovery:** Browse food items across 8 curated categories (*Salads, Rolls, Deserts, Sandwiches, Cakes, Pure Veg, Pasta, Noodles*) with instant category filtering and search queries.
- **Cart & State Management:** Centralized client state via React Context API, seamlessly synchronizing cart items with the MongoDB database for authenticated sessions.
- **Secure Authentication:** Token-based User Authentication (JWT) with encrypted password storage using `bcrypt`.
- **Payment Processing:** Integrated **Stripe Checkout** for secure credit/debit card transactions and automated order validation.
- **Order Tracking:** Real-time user order history with live status updates (*Food Processing*, *Out for Delivery*, *Delivered*).
- **Responsive UI/UX:** Mobile-first, pixel-perfect responsive interface with error boundaries and smooth toast notifications.

### 🛠️ Admin Management Portal
- **Menu Inventory Control:** Add new food items with custom title, category, price, description, and image uploads handled via `Multer`.
- **Item Removal & Listing:** Real-time data synchronization to inspect, list, and delete menu items from the live database.
- **Order Lifecycle Management:** Monitor customer orders in real-time and update shipment statuses dynamically.

---

## 🛠️ Technology Stack & Architecture

### **Frontend & Admin (Client Layer)**
- **Framework:** React 18, Vite
- **Routing:** React Router DOM (v6)
- **State Management:** React Context API (StoreContext)
- **HTTP Client:** Axios (RESTful API communication)
- **Styling:** Modular CSS3, Responsive Grid/Flexbox Layouts
- **Notifications:** React Toastify
- **Deployment:** Vercel (Continuous Deployment with automated builds)

### **Backend (Server & Business Logic Layer)**
- **Runtime:** Node.js (ES6+ Modules)
- **Framework:** Express.js
- **Database & ODM:** MongoDB Atlas with Mongoose ORM
- **Authentication & Security:** JSON Web Tokens (`jsonwebtoken`), `bcrypt` hashing, CORS policy, Dotenv configuration
- **File Uploads:** Multer (multipart/form-data image processing)
- **Payments:** Stripe API (Session creation and payment verification)
- **Deployment:** Render (Cloud Web Service)

---

## 📐 System Architecture

```
┌────────────────────────────────────────────────────────┐
│                   Client Layer                         │
│   ┌─────────────────────────┐ ┌──────────────────────┐ │
│   │  React Customer App     │ │  React Admin Portal  │ │
│   │  (Vercel Hosting)       │ │  (Vercel Hosting)    │ │
│   └────────────┬────────────┘ └──────────┬───────────┘ │
└────────────────┼─────────────────────────┼─────────────┘
                 │       HTTPS / REST      │
                 ▼                         ▼
┌────────────────────────────────────────────────────────┐
│                   Server Layer                         │
│            Node.js / Express REST API                  │
│            (Render Cloud Web Service)                  │
│                                                        │
│   • Auth Middleware (JWT)     • Multer Storage Engine  │
│   • Cart Controller           • Order Controller       │
│   • Food Controller           • Stripe Payment Gateway │
└────────────────────────┬───────────────────────────────┘
                         │
                         ▼
┌────────────────────────────────────────────────────────┐
│                   Database Layer                       │
│             MongoDB Atlas (Cloud NoSQL)                │
│                                                        │
│   • Users Collection          • Foods Collection       │
│   • Orders Collection         • Carts Sub-documents    │
└────────────────────────────────────────────────────────┘
```

---

## 📁 Repository Structure

```plaintext
food-del/
├── admin/                 # Admin Dashboard React application
│   ├── src/
│   │   ├── components/    # Navbar, Sidebar, UI components
│   │   ├── pages/         # Add, List, and Orders management pages
│   │   └── assets/        # Admin icons and configurations
│   ├── package.json
│   └── vite.config.js
├── backend/               # Express.js REST API Backend
│   ├── config/            # Database connection setup (Mongoose)
│   ├── controllers/       # Business logic (cart, food, order, user)
│   ├── middleware/        # JWT Authentication middleware
│   ├── models/            # Mongoose Schemas (user, food, order)
│   ├── routes/            # Express route declarations
│   ├── uploads/           # Static asset directory for food item images
│   ├── seed.js            # Database seeding script for catalog items
│   ├── server.js          # Main Express server entry point
│   └── package.json
├── frontend/              # Customer-facing React web application
│   ├── src/
│   │   ├── components/    # Navbar, FoodDisplay, FoodItem, Footer, etc.
│   │   ├── Context/       # Global StoreContext for cart, auth, state
│   │   ├── pages/         # Home, Cart, PlaceOrder, MyOrders, Verify
│   │   └── assets/        # Application branding and media assets
│   ├── package.json
│   └── vite.config.js
└── README.md              # Project documentation
```

---

## ⚡ Local Development Setup

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or later recommended)
- [MongoDB](https://www.mongodb.com/) (Local or MongoDB Atlas cluster connection string)
- [Git](https://git-scm.com/)

### 2. Clone the Repository
```bash
git clone https://github.com/gourav141414/food-del.git
cd food-del
```

### 3. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend/` directory:
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```
Start the backend server:
```bash
# Seed initial food catalog (Optional)
node seed.js

# Run development server
npm run server
```

### 4. Frontend Setup
Open a new terminal tab:
```bash
cd frontend
npm install
```
Create a `.env` file in the `frontend/` directory:
```env
VITE_BACKEND_URL=http://localhost:4000
```
Start the frontend app:
```bash
npm run dev
```

### 5. Admin Portal Setup
Open a new terminal tab:
```bash
cd admin
npm install
```
Create a `.env` file in the `admin/` directory:
```env
VITE_BACKEND_URL=http://localhost:4000
```
Start the admin dashboard:
```bash
npm run dev
```

---

## 📡 REST API Endpoints Reference

| Method | Endpoint | Description | Auth Required |
|---|---|---|---|
| `POST` | `/api/user/register` | Register a new user account | No |
| `POST` | `/api/user/login` | Authenticate user & return JWT token | No |
| `GET` | `/api/food/list` | Retrieve all food catalog items | No |
| `POST` | `/api/food/add` | Upload and insert a new food item | Admin |
| `POST` | `/api/food/remove` | Delete a food item by ID | Admin |
| `POST` | `/api/cart/add` | Add an item to user's cart | Yes (JWT) |
| `POST` | `/api/cart/remove` | Remove an item from user's cart | Yes (JWT) |
| `POST` | `/api/cart/get` | Fetch current user's cart data | Yes (JWT) |
| `POST` | `/api/order/place` | Initialize Stripe checkout session | Yes (JWT) |
| `POST` | `/api/order/verify` | Validate Stripe payment confirmation | Yes (JWT) |
| `POST` | `/api/order/userorders` | Fetch authenticated user's order history | Yes (JWT) |
| `GET` | `/api/order/list` | Fetch all orders across system | Admin |
| `POST` | `/api/order/status` | Update delivery status for an order | Admin |

---

## 👨‍💻 Author

- **Gourav Yadav**
- **GitHub:** [@gourav141414](https://github.com/gourav141414)

---

## 📄 License

This project is licensed under the [ISC License](LICENSE).
