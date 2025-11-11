# 🏥 Drug GENIE - AI-Powered Healthcare Management System

[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16+-green.svg)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.x-green.svg)](https://www.mongodb.com/)
[![Vite](https://img.shields.io/badge/Vite-7.x-purple.svg)](https://vitejs.dev/)
[![Express](https://img.shields.io/badge/Express-4.x-lightgrey.svg)](https://expressjs.com/)

A comprehensive full-stack healthcare application with **Google Gemini AI** integration, medicine tracking, blood bank management, real-time notifications, and personalized health insights. Built with modern technologies and featuring a beautiful dark mode interface.

## 📖 Quick Links
- [What is Drug GENIE?](#-what-is-drug-genie)
- [Features](#-features)
- [How to Install](#️-installation--setup)
- [How to Run](#-running-the-application)
- [Troubleshooting](#-troubleshooting)

---

## 💊 What is Drug GENIE?

Drug GENIE is a **complete healthcare management system** that helps you:
- ✅ **Track your medicines** with smart reminders
- ✅ **Check drug interactions** before taking multiple medicines
- ✅ **Get AI health advice** powered by Google Gemini
- ✅ **Find blood donors** when you need them
- ✅ **Search 14,690+ medicines** with detailed information
- ✅ **Monitor your health** with personalized insights

**Perfect for:** Patients, caregivers, healthcare professionals, and anyone managing medications.

---

## ✨ Features

### 🎯 Core Features (100% Functional)

| Feature | Description |
|---------|-------------|
| 🤖 **AI Health Assistant** | Chat with Google Gemini AI for medical advice and health questions |
| 💊 **Medicine Library** | Search 14,690+ medicines with complete details (uses, side effects, dosage) |
| ⚠️ **Drug Interaction Checker** | Check if your medicines are safe to take together (770+ interactions) |
| 🔔 **Medicine Reminders** | Never miss a dose - set custom schedules for all your medicines |
| 🩸 **Blood Bank** | Find blood donors or post requests - automatic matching by blood type |
| 📊 **Health Score** | Track your overall health with personalized metrics and engagement streaks |
| 🔔 **Real-time Notifications** | Get notified about blood requests matching your blood type |
| 👤 **Profile Management** | Update your profile, change password, upload photo, manage account |

### 🎨 UI/UX Features
- **🌙 Dark Mode** - Complete dark theme support across all pages with smooth transitions
- **📊 Dynamic Dashboard** - Real-time statistics with live data from MongoDB
- **🔔 Real-time Notifications** - Blood donation alerts and system notifications with unread badges
- **📱 Responsive Design** - Mobile-first design that works on all devices
- **⚡ Fast Performance** - Optimized with React.memo, useCallback, and debouncing
- **🎭 Smooth Animations** - Framer Motion animations throughout the app
- **🍞 Toast Notifications** - Non-blocking, beautiful feedback messages
- **🎯 Professional Modals** - Custom-designed modals for important actions

### 📈 Analytics & Tracking
- **Active Users Tracking** - Monitor total registered users
- **Drug Interaction Logs** - Track all drug interaction checks
- **AI Consultation Logs** - Record all AI assistant conversations
- **Blood Request Analytics** - Monitor blood donation requests
- **Activity Feed** - Real-time user activity tracking across all features
- **Health Score Metrics** - Activity level, consistency, feature usage, and engagement streaks

## 🏗️ Tech Stack

### Frontend
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with dark mode support
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **HTTP Client**: Axios
- **Routing**: React Router v6

### Backend
- **Runtime**: Node.js + Express
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT + bcrypt
- **API**: RESTful architecture

### Features
- **Real-time Updates**: Polling-based notifications (2-minute intervals)
- **Data Persistence**: MongoDB collections for all features
- **Security**: Protected routes, password hashing, CORS configuration
- **Performance**: Optimized re-renders, debounced search, lazy loading

---

## 📋 Prerequisites (What You Need)

Before installing Drug GENIE, make sure you have:

| Requirement | Version | Download Link |
|-------------|---------|---------------|
| **Node.js** | v16 or higher | [Download Node.js](https://nodejs.org/) |
| **MongoDB** | Any version | [Download MongoDB](https://www.mongodb.com/try/download/community) OR use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free cloud) |
| **Google Gemini API Key** | Free | [Get API Key](https://makersuite.google.com/app/apikey) |

**Don't worry!** If you don't have these, the links above will help you install them.

---

## 🛠️ Installation & Setup (Step by Step)

### Step 1: Download the Project

```bash
# Download the code
git clone https://github.com/yourusername/Drug_GENIE.git

# Go into the project folder
cd Drug_GENIE
```

### Step 2: Setup Backend (Server)

```bash
# Go to backend folder
cd backend

# Install all required packages
npm install
```

**Create a `.env` file** in the `backend` folder with this content:

```env
# Database Connection (IMPORTANT: Use MONGODB_URI, not MONGO_URI)
MONGODB_URI=mongodb://localhost:27017/drugGenieDB
# OR if using MongoDB Atlas (cloud):
# MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/drugGenieDB

# Secret key for login security (change this to any random text)
JWT_SECRET=your-super-secret-key-change-this-to-anything-random

# Server port
PORT=5000

# Google Gemini AI Key (get from link above)
GEMINI_API_KEY=your-gemini-api-key-here
```

**Start the backend:**

```bash
npm run dev
```

✅ You should see: `Server running on port 5000` and `MongoDB Connected`

### Step 3: Setup Frontend (Website)

Open a **NEW terminal window** (keep backend running) and run:

```bash
# Go to frontend folder
cd my-app

# Install all required packages
npm install

# Start the website
npm run dev
```

✅ You should see: `Local: http://localhost:5173`

### Step 4: Open the Website

Open your browser and go to: **http://localhost:5173**

🎉 **Done!** You should see the Drug GENIE login page.

---

## 🚀 Running the Application (Daily Use)

### Quick Start (Windows Users)

Just double-click: **`start.bat`** or **`CLEAN_START.bat`**

This will automatically start both backend and frontend!

### Manual Start

**Terminal 1 (Backend):**
```bash
cd backend
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd my-app  
npm run dev
```

**Then open:** http://localhost:5173

### First Time Using?

1. Click **"Sign Up"** to create your account
2. Fill in your details (name, email, password)
3. Click **"Login"** with your new account
4. Start using Drug GENIE! 🎉

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (protected)
- `PUT /api/auth/profile` - Update user profile (protected)
- `PUT /api/auth/change-password` - Change password (protected)
- `POST /api/auth/upload-photo` - Upload profile photo (protected)
- `DELETE /api/auth/delete-account` - Delete user account (protected)
- `GET /api/auth/google` - Google OAuth login
- `GET /api/auth/google/callback` - Google OAuth callback

### Medicine Library
- `GET /api/medicines/search?query=name` - Search medicines
- `GET /api/medicines/:name` - Get medicine details
- `GET /api/medicines` - Get all medicines (paginated)

### Reminders
- `GET /api/reminders` - Get user reminders (protected)
- `POST /api/reminders` - Create reminder (protected)
- `PUT /api/reminders/:id` - Update reminder (protected)
- `DELETE /api/reminders/:id` - Delete reminder (protected)

### Blood Requests
- `GET /api/blood-requests` - Get all blood requests (protected)
- `POST /api/blood-requests` - Create blood request (protected)
- `DELETE /api/blood-requests/:id` - Cancel blood request (protected)

### Notifications
- `GET /api/notifications` - Get user notifications (protected)
- `GET /api/notifications/unread-count` - Get unread count (protected)
- `PUT /api/notifications/:id/read` - Mark as read (protected)
- `DELETE /api/notifications/:id` - Delete notification (protected)

### Statistics & Analytics
- `GET /api/stats/dashboard` - Get dashboard statistics
- `GET /api/stats/user` - Get user-specific stats (protected)
- `POST /api/stats/log-interaction` - Log drug interaction check
- `POST /api/stats/log-consultation` - Log AI consultation

### AI Assistant
- `POST /api/ai/chat` - Chat with AI assistant (protected)
- `GET /api/ai/history` - Get consultation history (protected)
- `DELETE /api/ai/history` - Clear consultation history (protected)

### Health Score
- `GET /api/health-score` - Get user health score (protected)

### Activities
- `GET /api/activities/recent` - Get recent activities (protected)
- `GET /api/activities/stats` - Get activity statistics (protected)

## 🔧 Development

### Backend Development
```bash
cd backend
npm run dev  # Starts with hot reload
```

### Frontend Development
```bash
cd my-app
npm run dev  # Starts with hot reload
```

### Building for Production
```bash
# Backend
cd backend
npm run build
npm start

# Frontend
cd my-app
npm run build
npm run preview
```

## 🧪 Testing the Integration

1. **Register a new user** via the signup page
2. **Login** with your credentials
3. **Create medicine reminders** in the Reminders section
4. **Post blood requests** in the Blood Bank section
5. **Verify data persistence** by refreshing the page

## 🔒 Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - bcrypt with salt rounds for password security
- **Protected Routes** - Middleware-based route protection
- **CORS Configuration** - Controlled cross-origin requests
- **Input Validation** - Server-side validation and sanitization
- **Environment Variables** - Sensitive data in .env files
- **No Credentials in Git** - .gitignore protection for secrets
- **Google OAuth** - Secure social login integration
- **Account Deletion** - Secure password-confirmed account deletion with warning modal

---

## 🐛 Troubleshooting (Common Problems)

### ❌ Problem: "Cannot connect to MongoDB"

**Solution:**
1. Make sure MongoDB is running:
   - Windows: Open "Services" and start "MongoDB Server"
   - OR use MongoDB Atlas (cloud) instead
2. Check your `.env` file has `MONGODB_URI` (NOT `MONGO_URI`)
3. Test connection string in MongoDB Compass

### ❌ Problem: "Port 5000 already in use"

**Solution:**
```bash
# Windows - Kill the process
netstat -ano | findstr :5000
taskkill /PID <number> /F

# Or use the provided script
CHECK-SERVERS.bat
```

### ❌ Problem: "Invalid credentials" when logging in

**Solution:**
1. Make sure you created an account first (Sign Up)
2. Check you're using the correct email and password
3. Try creating a new account
4. Clear browser data: Press F12 → Application → Clear Storage

### ❌ Problem: "AI Assistant not responding"

**Solution:**
1. Check you added `GEMINI_API_KEY` in backend `.env` file
2. Get a free API key from: https://makersuite.google.com/app/apikey
3. Restart the backend server after adding the key

### ❌ Problem: "Website shows blank page"

**Solution:**
1. Make sure BOTH backend AND frontend are running
2. Check backend is on port 5000
3. Check frontend is on port 5173
4. Open browser console (F12) to see errors

### ❌ Problem: "npm install fails"

**Solution:**
1. Delete `node_modules` folder and `package-lock.json`
2. Run `npm install` again
3. Make sure you have Node.js v16 or higher
4. Try: `npm cache clean --force` then `npm install`

### Still Having Issues?

1. Check the backend terminal for error messages
2. Check browser console (Press F12) for errors
3. Make sure all `.env` files are created correctly
4. Try restarting both servers

---

## 📝 Project Structure (How Files are Organized)

```
Drug_GENIE/
├── backend/
│   ├── src/
│   │   ├── config/          # Database configuration
│   │   ├── controllers/     # API route handlers
│   │   │   ├── authController.ts
│   │   │   ├── reminderController.ts
│   │   │   ├── bloodRequestController.ts
│   │   │   ├── notificationController.ts
│   │   │   ├── medicineController.ts
│   │   │   └── statsController.ts
│   │   ├── middleware/      # Auth & error middleware
│   │   ├── models/          # MongoDB schemas
│   │   │   ├── userModel.ts
│   │   │   ├── reminderModel.ts
│   │   │   ├── bloodRequestModel.ts
│   │   │   ├── notificationModel.ts
│   │   │   ├── medicineModel.ts
│   │   │   ├── drugInteractionLogModel.ts
│   │   │   └── aiConsultationLogModel.ts
│   │   ├── routes/          # API routes
│   │   └── utils/           # Helper functions
│   └── package.json
├── my-app/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── NotificationDropdown.tsx
│   │   │   └── GlobalSearch.tsx
│   │   ├── contexts/        # React contexts
│   │   │   └── ThemeContext.tsx
│   │   ├── pages/           # Application pages
│   │   │   ├── Dashboard.tsx
│   │   │   ├── AIAssistant.tsx
│   │   │   ├── DrugChecker.tsx
│   │   │   ├── MedicineLibrary.tsx
│   │   │   ├── Reminders.tsx
│   │   │   ├── BloodBank.tsx
│   │   │   ├── Profile.tsx
│   │   │   ├── HelpCenter.tsx
│   │   │   ├── ContactUs.tsx
│   │   │   └── auth/
│   │   │       ├── LoginPage.tsx
│   │   │       ├── SignupPage.tsx
│   │   │       └── GoogleCallback.tsx
│   │   ├── services/        # API service layer
│   │   │   ├── api.ts
│   │   │   ├── medicineApi.ts
│   │   │   └── notificationService.ts
│   │   ├── types/           # TypeScript definitions
│   │   └── utils/           # Helper functions
│   └── package.json
└── README.md
```

## 🎯 Key Features Explained

### Dark Mode Implementation
Complete dark mode support with:
- Tailwind CSS `dark:` classes throughout
- Theme context for global state management
- Smooth transitions with `transition-colors duration-200`
- Persistent theme preference in localStorage

### Dynamic Dashboard Statistics
- Real-time data from MongoDB collections
- Automatic logging of user interactions
- Drug interaction checks tracked
- AI consultations recorded
- Live user and blood request counts

### Medicine Library (14,690+ Medicines)
- MongoDB text indexing for fast search
- Debounced search (300ms) for performance
- Comprehensive medicine information:
  - Introduction & uses
  - Benefits & side effects
  - How to use & how it works
  - Quick tips & safety information

### Notification System
- Real-time notifications for blood compatibility
- Unread count badge on navbar
- Mark as read/unread functionality
- Automatic notifications for compatible donors
- Optimized polling (2-minute intervals)

---

## 🎨 What You Can Do with Drug GENIE

### For Patients:
- ✅ Set reminders for all your medicines
- ✅ Check if your medicines interact with each other
- ✅ Search for medicine information
- ✅ Get AI health advice 24/7
- ✅ Track your health score

### For Blood Donors:
- ✅ See who needs your blood type
- ✅ Get notified when someone needs blood
- ✅ Help save lives in your area

### For Healthcare Workers:
- ✅ Quick drug interaction checking
- ✅ Access to comprehensive medicine database
- ✅ Patient education tool

---

## 🎉 Recent Updates (v2.0)

### ✅ Completed Improvements
- **Code Cleanup** - Removed 1,050+ lines of non-functional code
- **Professional Modals** - Replaced browser dialogs with beautiful custom modals
- **Toast Notifications** - Added non-blocking feedback throughout the app
- **Account Deletion** - Improved UX with secure password-confirmed modal
- **Contact Page** - Made informational with clear contact details
- **Dark Mode Polish** - Enhanced dark mode support across all components
- **Performance** - Optimized bundle size and load times

### 🚀 Future Plans

We're working on:
- 📱 Mobile app (Android & iOS)
- 📧 Email notifications for reminders
- 📊 Advanced health analytics
- 💰 Medicine price comparison
- 🏪 Nearby pharmacy locator
- 📄 Health records management
- 👨‍⚕️ Doctor appointment booking
- 🔐 Two-Factor Authentication (2FA)
- 📤 Data export functionality

---

## 🤝 Contributing

Want to help improve Drug GENIE?

1. Fork this repository
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

---

## 📄 License

This project is licensed under the MIT License - free to use and modify.

---

## 👨‍💻 Author & Support

**Drug GENIE Team**

Developed with ❤️ for better healthcare management

### Need Help?
- 💬 Create an issue on GitHub
- 📧 Contact the development team
- 📖 Read the troubleshooting section above

---

## ⭐ Star This Project

If Drug GENIE helped you, please give it a star! It helps others find this project.

---

## 📊 Project Status

- ✅ **100% Functional Features** - All 17 features fully working
- ✅ **Production Ready** - Clean, tested, and deployed
- ✅ **Active Development** - Regular updates and improvements
- ✅ **Open Source** - MIT License

---

**Made with ❤️ by the Drug GENIE Team | © 2024-2025 All Rights Reserved**
