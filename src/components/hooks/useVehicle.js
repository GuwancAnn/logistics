import { useState, useEffect } from "react";
import axios from "axios";
export const useVehicle = () => {
  const [vehicleData, setVehicleData] = useState({});

  const fetchData = async () => {
    console.log("ok");
    try {
      const response = await axios.get(
        "http://132.148.79.178/api/v1/vehicle-list/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEzODUwMzI5LCJpYXQiOjE2OTgyOTgzMjksImp0aSI6Ijg1ODU1ZDYxZjRlYTQ3OTliNjg5MTZjYTFkZTA3YTY0IiwidXNlcl9pZCI6MX0.Gor64Q4kKKaVJnYn21wjKuPxa4oipX7V78AxADKV5Mk",
          },
        }
      );
      setVehicleData(response.data);
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
