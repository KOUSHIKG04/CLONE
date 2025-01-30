import { validationResult } from "express-validator";
import { getAddressCoordinate } from "../Services/maps.service.js";

export const getCoordinate = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { address } = req.query;

  try {
    const coordinates = await getAddressCoordinate(address);
    res.status(200).json(coordinates);
  } catch (error) {
    console.error("Error in getCoordinate:", error);
    res.status(404).json({ message: error.message || "Coordinates not found" });
  }
};
