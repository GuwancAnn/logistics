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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEyNjM3NjEwLCJpYXQiOjE2OTcwODU2MTAsImp0aSI6ImI5M2NjMGNlNzBkNDQ3ZWU4YjE4MjhkYzM4MGFhYmZkIiwidXNlcl9pZCI6MX0.BAjC4rd4uZ8IVr-b-0B9F8kHx1UWnIojaHMbNqots6E",
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
