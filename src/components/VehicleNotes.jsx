import React, { useEffect, useState } from "react";
import ClientHeader from "./ClientHeader";
import VehicleTable from "./VehicleTable";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useVehicle } from "./hooks/useVehicle";
function VehicleNotes() {
  const navigate = useNavigate();
  const { vehicleData, setVehicleData } = useVehicle();
  //   {
  //     id: 1,
  //     vehicle_photo: [],
  //     damageClaim: "DAMAGE",
  //     claimStatus: "VCC",
  //     vcr: "VCC",
  //     reqDate: "2023-10-08",
  //     delyDate: "2023-10-14",
  //     days: 45,
  //     year: 2015,
  //     make: "TOYOTA",
  //     model: "camry",
  //     color: "WHITE",
  //     vin: "4T1BF3EK0BU710719",
  //     lotNumber: "35456575",
  //     keys: "YES",
  //     vehicleType: "SEDAN",
  //     title: "YES",
  //     titleRecievedDate: "2023-10-10",
  //     loc: "NO",
  //     status: "PAPA",
  //     containerNumber: "4444455555",
  //     etaDate: "2023-10-31",
  //     loadingType: "AMAYA",
  //     createdDate: "2023-10-10",
  //     note: "BEST",
  //     document: "/media/vehicle_docs/Invoice_33.pdf",
  //     invoice: "/media/vehicle_invoice/Invoice_24.pdf",
  //     user: 1,
  //   },
  //   {
  //     id: 2,
  //     vehicle_photo: [
  //       {
  //         id: 1,
  //         photo: "/media/vehicle_photo/Screenshot_9.png",
  //         vehicle: 2,
  //       },
  //       {
  //         id: 1,
  //         photo: "/media/vehicle_photo/Screenshot_9.png",
  //         vehicle: 2,
  //       },
  //     ],
  //     damageClaim: "wefdsf",
  //     claimStatus: "fsdfs",
  //     vcr: "sfsdf",
  //     reqDate: "2023-10-09T05:29:23Z",
  //     delyDate: "2023-10-12T05:29:24Z",
  //     days: 2,
  //     year: 2023,
  //     make: "sdf",
  //     model: "dsf",
  //     color: "dfs",
  //     vin: "sfs4t65treg8",
  //     lotNumber: "fdd",
  //     keys: "rr",
  //     vehicleType: "ffs",
  //     title: "ffwe",
  //     titleRecievedDate: "2023-10-12T05:29:26Z",
  //     loc: "ferf",
  //     status: "ergreg",
  //     containerNumber: "gerg",
  //     etaDate: "2023-10-12T05:29:28Z",
  //     loadingType: "greg",
  //     createdDate: "2023-10-12T05:29:30Z",
  //     note: "gergedrg",
  //     document: "/media/vehicle_docs/Screenshot_8.png",
  //     invoice: "/media/vehicle_invoice/Screenshot_8.png",
  //     user: 2,
  //   },
  // ]
  useEffect(() => {
    const tokenLocal = localStorage.getItem("access");
    if (tokenLocal == null) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <div className="container mx-auto">
        <ClientHeader></ClientHeader>

        <VehicleTable
          setVehicleData={setVehicleData}
          vehicleData={vehicleData}
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

export default VehicleNotes;
