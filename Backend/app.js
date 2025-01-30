import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";


const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
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
import mapsRoutes from "./Routes/maps.routes.js";

app.use("/api/users", userRoutes);
app.use("/api/captains", captainRoutes);
app.use("/api/maps", mapsRoutes);



export default app;


