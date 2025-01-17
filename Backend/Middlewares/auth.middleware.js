import User from "../Models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import blacklistToken from "../Models/blacklistToken.model.js";

export const authUser = async (req, res, next) => {
  try {
    // const token = req.cookies.token || req.headers.authorization.split(" ")[1];

    const token =
      req.cookies.token || req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const isBlacklisted = await blacklistToken.findOne({ token });
    if (isBlacklisted) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRETS);

    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    req.user = user;

    return next();
  } catch (error) {
    console.error("Error authenticating user:", error);
  }
};
