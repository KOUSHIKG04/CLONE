import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const captainSchema = mongoose.Schema(
  {
    fullname: {
      firstname: {
        type: String,
        required: true,
        minlenght: [3, "First name must be at least 3 characters long"],
      },
      lastname: {
        type: String,
        minlenght: [3, "First name must be at least 3 characters long"],
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlenght: [8, "Password must be at least 8 characters long"],
      select: false,
    },
    socketId: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["online", "offline"],
      default: "offline",
    },
    vehicle: {
      color: {
        type: String,
        required: true,
        minlenght: [3, "Color must be at least 3 characters long"],
      },
      plate: {
        type: String,
        required: true,
      },
      capacity: {
        type: Number,
        required: true,
        min: [1, "Capacity must be at least 1 characters long"],
      },
      vehicleType: {
        type: String,
        required: true,
        enum: {
          values: ["motorcycle", "car", "auto"],
          message: "Vehicle type must be either motorcycle, car, or auto",
        },
      },
    },
    location: {
      lat: {
        type: Number,
      },
      long: {
        type: Number,
      },
    },
  },
  {
    timestamps: true,
  }
);

captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
    },
    process.env.ACCESS_TOKEN_SECRETS,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRES }
  );
  return token;
};

captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 11);
};

captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

captainSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 11);
  next();
});

const Captain = mongoose.model("Captain", captainSchema);
export default Captain;
