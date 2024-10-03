import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/explore.route.js";

dotenv.config();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

// import routes:
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/explore", exploreRoutes);

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
