import mongoose from "mongoose";

const blacklistTokenSchema = mongoose.Schema({
  token: {
    type: String,
    unique: true,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400,
  },
});

const blacklistToken = mongoose.model("Blacklist", blacklistTokenSchema);
export default blacklistToken;
