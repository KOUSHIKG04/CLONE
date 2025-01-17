import User from "../Models/user.models.js";
import { createUser } from "../Services/user.service.js";
import { validationResult } from "express-validator";
import blacklistToken from "../Models/blacklistToken.model.js";

export const registerUser = async (req, res) => {

  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { fullname, email, password } = req.body;

     const existingUser = await User.findOne({ email });
     if (existingUser) {
       return res.status(400).json({ error: "Email already exists" });
     }

    const user = await createUser({
      firstname: fullname.firstname,
      lastname: fullname.lastname,
      email, 
      password,
    });

    const token = user.generateAuthToken();

    res.status(201).json({ user, token });
  } catch (error) {
     console.error("Error creating user:",error);
  }
};

export const loginUser = async (req, res) => {

   try {
     const errors = validationResult(req);
     if (!errors.isEmpty()) {
       return res.status(400).json({ errors: errors.array() });
     }

     const { email, password } = req.body;

     const user = await User.findOne({ email }).select("+password");

     if (!user) {
       return res
         .status(401)
         .json({ error: "User not found or Invalid credentials" });
     }

     const isMatch = await user.comparePassword(password);

     if (!isMatch) {
       return res.status(401).json({ error: "Invalid credentials" });
     }

     const token = 
     user.generateAuthToken();

     res.cookie("token", token, {
       httpOnly: true, secure: true,
       maxAge : 1000 * 60 * 60 * 24,
     })

     return res.json({ user, token });

   } catch (error) {
    console.error("Error logging in user:", error);
   }
};

export const getUserProfile = async (req, res ) => {
    return res.json(req.user);
}


export const logoutUser = async (req, res) => {

    res.clearCookie("token");

    const token = 
    req.cookies.token || req.header("Authorization").replace("Bearer ", "");
    
    await blacklistToken.create({ token });

    return res.json({ message: "Logged out successfully" });
}
