import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://medicruita-backend.onrender.com/api",
  headers: { "Content-Type": "application/json" }
});

export default apiRequest;