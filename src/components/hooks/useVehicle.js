import { useState, useEffect } from "react";

export const useVehicle = () => {
  const [vehicleData, setVehicleData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://132.148.79.178/api/v1/vehicle-list/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEyNjM3NjEwLCJpYXQiOjE2OTcwODU2MTAsImp0aSI6ImI5M2NjMGNlNzBkNDQ3ZWU4YjE4MjhkYzM4MGFhYmZkIiwidXNlcl9pZCI6MX0.BAjC4rd4uZ8IVr-b-0B9F8kHx1UWnIojaHMbNqots6E",
          },
        }
      );
      const json = await response.json();
      setVehicleData(json);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return {
    setVehicleData,
    vehicleData,
  };
};
