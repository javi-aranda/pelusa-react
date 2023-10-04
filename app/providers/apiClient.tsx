import axios from "axios";

const apiClient = axios.create({
  baseURL: `${process.env.API_ENDPOINT}/api/v1`,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
