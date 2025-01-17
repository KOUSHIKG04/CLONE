import express from "express";
import { body } from "express-validator";
import { getUserProfile, loginUser, logoutUser, registerUser } from "../Controllers/user.controller.js";
import { authUser } from "../Middlewares/auth.middleware.js";

const router = express.Router();
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("First name must beat least 3 characters long"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("password must beat least 8 characters long"),
  ],
  registerUser
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 8 })
      .withMessage("password must beat least 8 characters long"),
  ],
   loginUser
);


router.get("/profile", authUser ,getUserProfile);

router.get("/logout", authUser ,logoutUser);


export default router;
