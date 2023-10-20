import React from "react";
import ClientHeader from "./ClientHeader";
function VehicleWeights() {
  return (
    <div className="container mx-auto">
      <ClientHeader></ClientHeader>

      <div className="flex justify-between items-center mt-10">
        <p className="font-semibold text-xl  text-regal-blue">
          {" "}
          Vehicles Weight
        </p>
        <div>
          <button className=" border    mt-4 mr-5 border-regal-blue text-regal-blue justify-center p-[14px] h-12 rounded-md items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue">
            Export Excel
          </button>
          <button className=" border  mt-4 mr-5 border-regal-blue text-regal-blue justify-center p-[14px] h-12 rounded-md items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue">
            Import Vehicle Weight
          </button>
        </div>
      </div>
      <div>
        <table className="table-auto w-full mt-12">
          <thead>
            <tr className="[&>th]:text-left  ">
              <th>Year</th>
              <th>Maker</th>
              <th>Model</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr className="[&>td>input]:rounded-md [&>td>input]:mb-5">
              <td>
                <input
                  type="number"
                  name=""
                  id=""
                  className="w-4/5 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
              </td>
              <td>
                <input type="text" name="" id="" className="w-4/5" />
              </td>
              <td>
                <input type="text" name="" id="" className="w-4/5" />
              </td>
              <td>
                <input type="text" name="" id="" className="w-4/5" />
              </td>
            </tr>
            <tr className="hover:bg-slate-50  [&>td]:p-2 [&>td]:border-b ">
              <td>2000</td>
              <td>hunday</td>
              <td>tucson</td>
              <td>566lbs</td>
              <td>eye</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VehicleWeights;
