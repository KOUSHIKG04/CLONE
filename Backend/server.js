import http from "http";
import app from "./app.js";
import connectDB from "./db/db.js";

const httpSerever = http.createServer(app);
const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    httpSerever.listen(PORT, () => {
      console.log(`Server running on port ${PORT}!!`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB: ", error.message);
  });
