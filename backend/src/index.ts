import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

// Load .env file FIRST before any other imports that use environment variables
dotenv.config({ path: path.join(process.cwd(), '.env') });

// Google OAuth
import passport from './config/passport';
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import reminderRoutes from "./routes/reminderRoutes";
import bloodRequestRoutes from "./routes/bloodRequestRoutes";
import notificationRoutes from './routes/notificationRoutes';
import medicineRoutes from './routes/medicineRoutes';
import statsRoutes from './routes/statsRoutes';
import aiRoutes from './routes/aiRoutes';
import healthScoreRoutes from './routes/healthScoreRoutes';
import activityRoutes from './routes/activityRoutes';
import { notFound, errorHandler } from "./middleware/errorMiddleware";

connectDB();

const app = express();

// Dynamic CORS configuration for local and production
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5174',
  'http://127.0.0.1:5173',
  'https://drug-genie.vercel.app',
  process.env.FRONTEND_URL // Allow custom frontend URL from .env
].filter(Boolean); // Remove undefined values

// Build CORS options once and reuse for both regular requests and preflight
const corsOptions: cors.CorsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, Postman, curl)
    if (!origin) return callback(null, true);

    // In development, allow any origin to avoid local CORS friction
    if (process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }

    // Check if origin is in allowed list or matches Vercel preview pattern
    if (allowedOrigins.includes(origin) || /https:\/\/drug-genie-.*\.vercel\.app$/.test(origin)) {
      callback(null, true);
    } else {
      // Do not throw; simply disallow to avoid 500 responses
      callback(null, false);
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
  optionsSuccessStatus: 200,
  preflightContinue: false,
};

app.use(cors(corsOptions));
// Explicitly handle preflight requests for all routes
app.options('*', cors(corsOptions));
app.use(express.json({ limit: '10mb' })); // Increase limit for profile photo uploads
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Initialize Passport
app.use(passport.initialize());

// Root endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Drug GENIE API Server",
    status: "Running",
    endpoints: {
      medicines: {
        search: "/api/medicines/search?query=medicine_name",
        getByName: "/api/medicines/:name",
        getAll: "/api/medicines"
      },
      auth: "/api/auth",
      reminders: "/api/reminders",
      bloodRequests: "/api/blood-requests",
      notifications: "/api/notifications",
      ai: "/api/ai"
    }
  });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/reminders", reminderRoutes);
app.use("/api/blood-requests", bloodRequestRoutes);
app.use("/api/notifications", notificationRoutes);
app.use("/api/medicines", medicineRoutes);
app.use("/api/stats", statsRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/health-score", healthScoreRoutes);
app.use("/api/activities", activityRoutes);

// Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
