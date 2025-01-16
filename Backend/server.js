import http from "http";
import app from "./app.js";

const httpSerever = http.createServer(app);
const PORT = process.env.PORT || 5000;

httpSerever.listen(PORT, () => {
  console.log("Server is running on port 3000");
});