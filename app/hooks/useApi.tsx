import { useState } from "react";

export default (apiFunc: any) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const request = async (...args: any[]) => {
    setLoading(true);
    try {
      const result = await apiFunc(...args);
      setData(result.data);
    } catch (err: any) {
      setError(err.message || "Unexpected Error!");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    error,
    loading,
    request,
  };
};
