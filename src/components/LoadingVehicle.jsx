import React from "react";
import ClientHeader from "./ClientHeader";
function LoadingVehicle() {
  return (
    <div className="container mx-auto">
      <ClientHeader></ClientHeader>
      <div className="flex  mt-12 border border-black p-5 w-1/4  ">
        <div className="mr-10">
          <p>Location</p>
          <p>EXPORTABLE</p>
          <p>PENDING</p>
          <p>MV907</p>
          <p>LIEN</p>
          <p>BOS</p>
          <p>REJECTED</p>
        </div>
        <div className="font-medium">
          <p>: All</p>
          <p>: 1</p>
          <p>: 1</p>
          <p>: 1</p>
          <p>: 1</p>
          <p>: 1</p>
          <p>: 1</p>
        </div>
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
      <div className="overflow-auto">
        <table className="table-auto">
          <thead className=" ">
            <tr className=" h-12  [&>th]:border-2 border-gray-200 [&>th]:font-normal ">
              <th>Customer</th>
              <th>Customer Id</th>
              <th>ON THE WAY</th>
              <th>ON HAND</th>
              <th>NO TITLE</th>
              <th>EXPORTABLE</th>
              <th>PENDING</th>
              <th>BOS</th>
              <th>LIEN</th>
              <th>REJECTED</th>
              <th>MV907</th>
              <th>LOADING STATUS</th>
              <th>LOADING INSTRUCTION</th>
              <th>ALL VEHICLE</th>
              <th>ALL CONTAINERS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

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
    </div>
  );
}

export default LoadingVehicle;
