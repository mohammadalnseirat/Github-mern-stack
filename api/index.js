import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import passport from "passport";
import session from "express-session";
import "./passport/github.auth.js";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/explore.route.js";
import authRoutes from "./routes/auth.route.js";
dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
const __dirname = path.resolve();
app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
app.use(express.json());

// import routes:
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/explore", exploreRoutes);

// Serve static assets in production
app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
});

// listen to the port:
app.listen(PORT, () => {
  connectDB();
  console.log(`server is running on port ${PORT}`);
});

// Middle ware to handle errors:
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
