import express from "express";
import { body } from "express-validator";
import { getCaptianProfile, loginCaptain, logoutCaptian, registerCaptain } from "../Controllers/captian.controller.js";
import { authCaptian } from "../Middlewares/auth.middleware.js";

const router = express.Router();
router.post(
  "/register",
  [
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("fullname.lastname")
      .isLength({ min: 3 })
      .withMessage("Last name must be at least 3 characters long"),
    body("email").isEmail().withMessage("Please use a valid email address"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be at least 3 characters long"),
    body("vehicle.plate").notEmpty().withMessage("Plate is required"),
    body("vehicle.capacity")
      .isInt({ min: 1 })
      .withMessage("Capacity must be at least 1"),
    body("vehicle.vehicleType")
      .isIn(["motorcycle", "car", "auto"])
      .withMessage("Vehicle type must be either motorcycle, car, or auto"),
  ],
  registerCaptain
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("password must beat least 8 characters long"),
  ],
   loginCaptain
);

router.get("/profile", authCaptian ,getCaptianProfile);

router.get("/logout", authCaptian ,logoutCaptian);


export default router;
