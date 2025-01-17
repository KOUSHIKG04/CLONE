import express from "express";
import "dotenv/config";
import cors from "cors";


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


import userRoutes from "./Routes/user.routes.js";
app.use("/api/users", userRoutes);



export default app;


