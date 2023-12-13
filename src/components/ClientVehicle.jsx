import React, { useEffect, useState } from "react";
import ClientHeader from "./ClientHeader";
import VehicleTable from "./VehicleTable";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useVehicle } from "./hooks/useVehicle";
function ClientVehicle() {
  const navigate = useNavigate();
  const { vehicleData, setVehicleData } = useVehicle();

  useEffect(() => {
    const tokenLocal = localStorage.getItem("access");
    if (tokenLocal == null) {
      navigate("/login");
    }
  }, []);
  console.log(vehicleData);
  const vehicle = vehicleData?.results ?? [];
  console.log(vehicle);
  return (
    <>
      <div className="container mx-auto">
        <ClientHeader></ClientHeader>
        <div className="flex items-center  flex-wrap mt-11 ">
          <button className="flex  w-[202px] border mt-4 mr-5 justify-center border-regal-blue text-regal-blue p-[14px] h-12 rounded-md  items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue">
            <p className="pl-[14px] "> Export</p>
          </button>
          <button
            onClick={() => navigate("/loading-vehicle")}
            className="flex border w-[202px]  mt-4 mr-5 border-regal-blue justify-center text-regal-blue p-[14px] h-12 rounded-md items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue"
          >
            <p className="pl-[14px] "> Loading of Vehicles</p>
          </button>
          <button
            onClick={() => navigate("/vehicle-weight")}
            className="flex border  w-[202px]  mt-4 mr-5 border-regal-blue text-regal-blue justify-center p-[14px] h-12 rounded-md items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue"
          >
            <p className="pl-[14px] ">Vehicles Weight</p>
          </button>
          <button
            onClick={() => navigate("/notes")}
            className="flex border  w-[202px]  mt-4 mr-5 border-regal-blue text-regal-blue justify-center p-[14px] h-12 rounded-md items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue"
          >
            <p className="pl-[14px]  "> Notes</p>
          </button>
        </div>
        <div className="flex justify-between items-center mt-11 mb-5">
          <div className="flex items-center ">
            <input
              type="text"
              placeholder=" Global Search"
              className="w-[54.3rem] border p-[14px] h-12  border-regal-blue rounded-md"
            />
            <button className="border  border-regal-blue ml-4  justify-center p-[14px] h-12   rounded-md hover:bg-regal-blue hover:text-white">
              Search
            </button>
          </div>
          <p>Showing : 1- 20 of 446</p>
        </div>
        <VehicleTable
          setVehicleData={setVehicleData}
          vehicle={vehicle}
        ></VehicleTable>
        <div className="flex justify-center mt-8">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.28809 12.0002L14.2981 18.0102L15.7121 16.5962L11.1121 11.9962L15.7121 7.39623L14.2981 5.99023L8.28809 12.0002Z"
              fill="#2E3A59"
            />
          </svg>
          <p className="bg-gray-200 rounded-xl w-6 h-6 text-center ml-4 ">1</p>
          <p className="bg-gray-200 rounded-xl w-6 h-6 text-center ml-4">2</p>
          <p className="bg-gray-200 rounded-xl w-6 h-6 text-center ml-4">3</p>
          <p className="ml-4">...</p>
          <p className="bg-gray-200 rounded-xl w-6 h-6 text-center ml-4">14</p>
          <p className="bg-gray-200 rounded-xl w-6 h-6 text-center ml-4 mr-4">
            15
          </p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.7131 12.0002L9.70209 5.99023L8.28809 7.40423L12.8881 12.0042L8.28809 16.5972L9.70209 18.0112L15.7131 12.0002Z"
              fill="#2E3A59"
            />
          </svg>
        </div>
      </div>{" "}
      <Footer></Footer>
    </>
  );
}

export default ClientVehicle;
