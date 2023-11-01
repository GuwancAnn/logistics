import React from "react";
import ClientHeader from "./ClientHeader";
function VinInformaition() {
  return (
    <div className="container mx-auto">
      <ClientHeader></ClientHeader>
      <div className="flex justify-end mt-10 ">
        <button className="   mr-4 flex   border mt-4 justify-center border-regal-blue text-regal-blue p-[14px] h-12 rounded-md  items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue">
          Vehicle Condition
        </button>
        <button className="    flex   border mt-4 justify-center border-regal-blue text-regal-blue p-[14px] h-12 rounded-md  items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue">
          Conversations
        </button>
      </div>
      <div>
        <p className="text-regal-blue text-xl font-medium">Vehicle Details</p>
        <div className="flex justify-between mt-7 ">
          <div className="flex-1 border mr-5 rounded-md">
            <table className="w-full">
              <tbody>
                <tr className="w-full text-center">
                  <th className="   w-1/2 border p-3  ">Customer name</th>

                  <td className="border  w-1/2  p-3 ">Ok ok</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex-1 border mr-5 rounded-md">
            <table className="w-full">
              <tbody>
                <tr className="w-full">
                  <th className="   w-1/2 border p-3  ">Customer name</th>

                  <td className="border  w-1/2  p-3 ">Ok ok</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex-1 border rounded-md">
            <table className="w-full">
              <tbody>
                <tr className="w-full">
                  <th className="   w-1/2 border p-3  ">Customer name</th>

                  <td className="border  w-1/2  p-3 ">Ok ok</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VinInformaition;
