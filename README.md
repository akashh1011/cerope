# Cerope – MERN Stack Auth & Profile Flow (Intern Task)

This project is a **MERN stack** implementation of a core user flow for Cerope’s MVP.  
It includes a complete authentication system and basic profile management with a responsive UI built from Figma designs.

## 🚀 Features

- **MERN Architecture**
  - Frontend: **React.js** + **Vite/CRA** (JS/ES6)
  - Backend: **Node.js** + **Express.js**
  - Database: **MongoDB** (local or cloud)
- **Authentication**
  - JWT-based login & registration
  - Protected routes on the frontend
  - Secure password hashing (e.g., bcrypt)
- **Pages Implemented**
  1. **Login Page**
     - Email/password login
     - Proper error handling & validation
     - Stores JWT (e.g., in HTTP-only cookie or localStorage, depending on implementation)
  2. **Register Page**
     - User registration form
     - Client-side + server-side validation
     - Persists user in MongoDB
  3. **Setup Page**
     - Profile setup / onboarding
     - Personal details & style/preferences inputs
     - Data saved to the user document in MongoDB
  4. **My Profile Page**
     - Fetches user data from database using JWT
     - Displays profile data
     - Allows profile updates (e.g., name, avatar, preferences)
- **UI & Responsiveness**
  - Layouts recreated from the **Figma** design
  - Responsive for mobile, tablet, and desktop
  - Styled using **Tailwind CSS**
- **Code Style**
  - JavaScript (ES6+) across frontend and backend
  - Organized folder structure for scalability

---

## 🏗️ Tech Stack

- **Frontend**
  - React.js
  - React Router
  - Tailwind CSS
  - Axios / Fetch for API calls

- **Backend**
  - Node.js
  - Express.js
  - MongoDB & Mongoose
  - JSON Web Token (JWT)
  - bcrypt (for password hashing)
  - dotenv (for environment variables)

- **Database**
  - MongoDB (local instance, e.g., `mongodb://127.0.0.1:27017/cerope`)

---





