import React, { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    // check if we cannot load data from backend
    if (!response.ok) return setError(true);

    setError(false);
    setData(response.data);
  };

  return { request, data, loading, error };
};
