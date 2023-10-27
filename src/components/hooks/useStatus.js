import { useState, useEffect } from "react";

export const useStatus = () => {
  const [statusData, setStatusData] = useState([]);

  const fetchStatus = async () => {
    try {
      const response = await fetch(
        "http://132.148.79.178/api/v1/status-list/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzODUwMzI5LCJpYXQiOjE2OTgyOTgzMjksImp0aSI6Ijg1ODU1ZDYxZjRlYTQ3OTliNjg5MTZjYTFkZTA3YTY0IiwidXNlcl9pZCI6MX0.Gor64Q4kKKaVJnYn21wjKuPxa4oipX7V78AxADKV5Mk",
          },
        }
      );
      const json = await response.json();
      setStatusData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  return {
    setStatusData,
    statusData,
  };
};
