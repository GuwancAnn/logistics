import React from "react";
import ClientHeader from "./ClientHeader";
import Footer from "./Footer";
import PriceTypeSelect from "./Select/PriceTypeSelect";
import PriceStatus from "./Select/PriceStatus";
function ClientPrice() {
  return (
    <>
      <div className="container mx-auto text-regal-blue">
        <ClientHeader></ClientHeader>
        <p className="mt-11 mb-6">Showing : 1- 20 of 446</p>
        <table className="table-auto w-full ">
          <thead className=" ">
            <tr className=" h-12  [&>th]:border-2 border-gray-200 [&>th]:font-normal ">
              <th>NO</th>
              <th>Month</th>
              <th>Pricing type</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Updated At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="[&>td]:border-2 border-gray-300 [&>td]:px-2 [&>td]:h-20 ">
              <td></td>
              <td></td>
              <td className="w-48">
                <PriceTypeSelect></PriceTypeSelect>
              </td>
              <td>
                <PriceStatus></PriceStatus>
              </td>
              <td>
                <input
                  type="text"
                  name=""
                  className="border rounded-md w-full"
                  id=""
                />
              </td>
              <td>
                {" "}
                <input
                  type="text"
                  name=""
                  className="border rounded-md w-full"
                  id=""
                />
              </td>
              <td>
                <div className="flex items-center justify-between ">
                  <button>
                    <svg
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24.5084 22.6568L30.0657 28.4115L28.1475 30.264L22.5902 24.5092L16.8355 30.0665L14.983 28.1483L20.7378 22.591L15.1805 16.8363L17.0987 14.9839L22.656 20.7386L28.4107 15.1813L30.2631 17.0996L24.5084 22.6568Z"
                        fill="#2E3A59"
                      />
                    </svg>
                  </button>
                  <button>
                    {" "}
                    <svg
                      width="29"
                      height="28"
                      viewBox="0 0 29 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.1639 24.0422L17.39 20.2691C15.683 21.3952 13.4008 21.0468 12.1075 19.4628C10.8141 17.8788 10.9293 15.573 12.374 14.1258C13.821 12.6805 16.1271 12.5648 17.7114 13.8581C19.2958 15.1513 19.6443 17.4338 18.5181 19.141L22.2904 22.9156L21.1639 24.0422ZM15.1923 14.5533C14.0517 14.5525 13.0695 15.3576 12.8462 16.4762C12.623 17.5947 13.2209 18.7152 14.2744 19.1523C15.3279 19.5895 16.5435 19.2217 17.1778 18.2737C17.8121 17.3258 17.6885 16.0618 16.8825 15.2547C16.4355 14.8045 15.8268 14.5519 15.1923 14.5533Z"
                        fill="#2E3A59"
                      />
                      <path
                        d="M21.2474 25.6673H7.2474C5.95873 25.6673 4.91406 24.6227 4.91406 23.334V4.66732C4.91406 3.37865 5.95873 2.33398 7.2474 2.33398H15.4141C15.4268 2.33454 15.4393 2.33689 15.4514 2.34098C15.4628 2.3445 15.4745 2.34685 15.4864 2.34798C15.5893 2.35458 15.6909 2.37458 15.7886 2.40748L15.8212 2.41798C15.8477 2.42695 15.8734 2.43787 15.8982 2.45065C16.0253 2.50715 16.1411 2.5862 16.2401 2.68398L23.2401 9.68399C23.3378 9.7829 23.4169 9.89872 23.4734 10.0258C23.4851 10.0515 23.4932 10.0783 23.5026 10.1052L23.5131 10.1355C23.5456 10.2328 23.5649 10.334 23.5702 10.4365C23.572 10.4472 23.5748 10.4577 23.5784 10.468C23.5805 10.4787 23.5812 10.4897 23.5809 10.5007V23.334C23.5809 24.6227 22.5361 25.6673 21.2474 25.6673ZM7.2474 4.66732V23.334H21.2474V11.6673H15.4141C14.7697 11.6673 14.2474 11.145 14.2474 10.5007V4.66732H7.2474ZM16.5807 6.31698V9.33398H19.5977L16.5807 6.31698Z"
                        fill="#2E3A59"
                      />
                    </svg>
                  </button>
                </div>
              </td>
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

export default ClientPrice;
