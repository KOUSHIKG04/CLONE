import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
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
  },
  {
    timestamps: true,
  }
);



userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign(
    {
      _id: this._id,
    },
    process.env.ACCESS_TOKEN_SECRETS,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRES }
  );
  return token;
};


userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 11);
}

userSchema.methods.comparePassword = 
async function(password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.pre("save", async function(next) {
    if (!this.isModified("password")) {
        next();
    }
     this.password = await bcrypt.hash(this.password, 11);
     next();
});


const User = mongoose.model("User", userSchema);
export default User;