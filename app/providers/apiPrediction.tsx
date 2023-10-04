import apiClient from "./apiClient";

const getPrediction = (url: string) =>
  apiClient.post("/analysis", { input: url });

export default getPrediction;
