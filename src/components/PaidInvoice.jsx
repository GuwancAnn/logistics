import React, { useEffect, useState } from "react";
import ClientHeader from "./ClientHeader";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
function PaidInvoices() {
  const navigate = useNavigate;
  useEffect(() => {
    const token = localStorage.getItem("access");
    if (token == null) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <div className="container mx-auto text-regal-blue">
        <ClientHeader></ClientHeader>
        <p className="font-semibold text-xl mt-10">PAID INVOICES</p>
        <div className="flex mt-11">
          <div className="bg-gray-200 p-4 rounded-md flex-grow mr-5">
            <p className="font-medium mb-4">Unpaid Amount</p>
            <p className="font-semibold text-lg">123.5</p>
          </div>
          <div className="bg-gray-200 p-4 rounded-md flex-grow mr-5">
            <p className="font-medium mb-4">Paid Amount</p>
            <p className="font-semibold text-lg">123.5</p>
          </div>{" "}
          <div className="bg-gray-200 p-4 rounded-md flex-grow mr-5 ">
            <p className="font-medium mb-4">Partial Amount</p>
            <p className="font-semibold text-lg">123.5</p>
          </div>{" "}
          <div className="bg-gray-200 p-4 rounded-md flex-grow mr-5">
            <p className="font-medium mb-4">Total Amount</p>
            <p className="font-semibold text-lg">123.5</p>
          </div>{" "}
          <div className="bg-gray-200 p-4 rounded-md flex-grow mr-5">
            <p className="font-medium mb-4">Total Discount</p>
            <p className="font-semibold text-lg">123.5</p>
          </div>{" "}
          <div className="bg-gray-200 p-4 rounded-md flex-grow">
            <p className="font-medium mb-4"> Worth</p>
            <p className="font-semibold text-lg">123.5</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-8 mb-6">
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
        <div className="overflow-auto">
          {" "}
          <table className="table-auto w-full  ">
            <thead className=" ">
              <tr className=" h-12  [&>th]:border-2 border-gray-200 [&>th]:font-normal ">
                <th>Invoice Id</th>
                <th>Date</th>
                <th>Company Name</th>
                <th>Container No</th>
                <th>Ar No</th>
                <th>Total Amount</th>
                <th>Damage</th>
                <th>Storage</th>
                <th>Discount</th>
                <th>Other</th>
                <th>Paid Amount</th>
                <th>Balance</th>
                <th>Note</th>
                <th>Documents</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="[&>td]:border-2 border-gray-300 [&>td]:px-2 [&>td]:h-12 ">
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
      <Footer></Footer>
    </>
  );
}

export default PaidInvoices;
