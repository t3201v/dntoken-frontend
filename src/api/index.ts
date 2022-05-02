import axios from "axios";

const baseURL = process.env.REACT_APP_API || "http://localhost:3001";

const api = axios.create({
  baseURL: baseURL + "/api/v1",
});

export default api;
