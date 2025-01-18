import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "22kb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "22kb",
  })
);

app.use(cookieParser());


import userRoutes from "./Routes/user.routes.js";
import captainRoutes from "./Routes/captian.routes.js";
app.use("/api/users", userRoutes);
app.use("/api/captains", captainRoutes);



export default app;


