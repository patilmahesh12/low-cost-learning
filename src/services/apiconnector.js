import axios from "axios";

export const apiConnector = axios.create({
  baseURL: "http://localhost:4000/api/v1", // Ensure this matches the backend URL
  withCredentials: true, // Include cookies in requests
});
