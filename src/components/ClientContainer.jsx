import React from "react";
import ClientHeader from "./ClientHeader";
import Footer from "./Footer";
function CLientContainer() {
  return (
    <>
      <div className="container mx-auto">
        <ClientHeader></ClientHeader>
        <div className="flex justify-between items-center mt-11 mb-6">
          <div className="flex items-center ">
            <input
              type="text"
              placeholder=" Vehicle search by vin/lot/Ar/Cont No"
              className="w-[54.3rem] border p-[14px] h-12  border-regal-blue rounded-md"
            />
            <button className="border  border-regal-blue ml-4  justify-center p-[14px] h-12   rounded-md hover:bg-regal-blue hover:text-white">
              Search
            </button>
          </div>
          <p>Showing : 1- 20 of 446</p>
        </div>
        <table className="table-auto w-full ">
          <thead className=" ">
            <tr className=" h-12  [&>th]:border-2 border-gray-200 [&>th]:font-normal ">
              <th>NO</th>
              <th>Ar Number</th>
              <th>Photos</th>
              <th>Container Number</th>
              <th>Booking Number</th>
              <th>B/L</th>
              <th>Manifest</th>
              <th>POD</th>
              <th>Loaded Date</th>
              <th>Export Date</th>
              <th>ETA</th>
              <th>Invoice</th>
              <th>Invoice Amount</th>
              <th>Paid Amount</th>
              <th>Note</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            <tr className="[&>td]:border-2 border-gray-300 [&>td]:px-2 [&>td]:h-20 ">
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
              <td></td>
            </tr>
          </tbody>
        </table>
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
      <Footer></Footer>
    </>
  );
}

export default CLientContainer;
