import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333/npm/",
});
export default api;
