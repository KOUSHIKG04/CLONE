import Captain from "../Models/captain.models.js";
import { createCaptain } from "../Services/captian.service.js";
import { validationResult } from "express-validator";
import blacklistToken from "../Models/blacklistToken.model.js";

export const registerCaptain = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { fullname, email, password, vehicle } = req.body;

    const existingUser = await Captain.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Captain already exists" });
    }

    const captain = await createCaptain({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email,
      password,
      color: vehicle.color,
      plate: vehicle.plate,
      capacity: vehicle.capacity,
      vehicleType: vehicle.vehicleType,
    });

    const token = captain.generateAuthToken();

    res.status(201).json({ captain, token });
  } catch (error) {
    console.error("Error creating captain:", error);
  }
};

export const loginCaptain = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const captain = await Captain.findOne({ email }).select("+password");

    if (!captain) {
      return res
        .status(401)
        .json({ error: "User not found or Invalid credentials" });
    }

    const isMatch = await captain.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = captain.generateAuthToken();

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 1000 * 60 * 60 * 24,
    });

    return res.json({ captain, token });
  } catch (error) {
    console.error("Error logging in captain:", error);
  }
};


export const getCaptianProfile = async (req, res) => {
  return res.json(req.captian);
};

export const logoutCaptian = async (req, res) => {
  res.clearCookie("token");

  const token =
    req.cookies.token || req.header("Authorization").replace("Bearer ", "");

  await blacklistToken.create({ token });

  return res.json({ message: "Logged out successfully" });
};
