import express from "express";
import { authCaptian, authUser } from "../Middlewares/auth.middleware.js";
import { query } from "express-validator";
import { getCoordinate } from "../Controllers/map.controller.js";

const router = express.Router();

router.get(
  "/get-coordinates",
  query("address").isString().isLength({ min: 3 }),
  authUser,
  getCoordinate
);

export default router;