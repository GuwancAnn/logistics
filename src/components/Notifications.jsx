import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";

const Notification = () => {
  const [showModalTopRight, setShowModalTopRight] = useState(false);
  const navigate = useNavigate;
  useEffect(() => {
    const token = localStorage.getItem("access");
    if (token == null) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <div className="space-x-2 mr-6 ">
        {/* <!--Button trigger top right modal--> */}

        <button
          type="button"
          className="inline-block rounded   text-xs font-medium uppercase leading-normal text-white "
          onClick={() => setShowModalTopRight(true)}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.9997 24.7275C14.7947 24.7275 13.8179 23.946 13.8179 22.982H18.1816C18.1816 23.946 17.2047 24.7275 15.9997 24.7275ZM24.727 22.1093H7.27246V20.3639L9.45428 19.4911V14.6911C9.45428 11.6697 11.0045 9.71048 13.8179 9.17549V7.27295H18.1816V9.17549C20.995 9.7096 22.5452 11.668 22.5452 14.6911V19.4911L24.727 20.3639V22.1093ZM15.9997 10.5457C14.6685 10.4769 13.3846 10.9535 12.5906 11.8111C11.9116 12.6704 11.5784 13.6756 11.6361 14.6911V20.3639H20.3634V14.6911C20.421 13.6756 20.0878 12.6704 19.4088 11.8111C18.6149 10.9535 17.331 10.4769 15.9997 10.5457Z"
              fill="#2E3A59"
            />
          </svg>
        </button>
      </div>

      {/* <!--Top right modal--> */}
      <TEModal show={showModalTopRight} setShow={setShowModalTopRight}>
        <TEModalDialog
          position="top-right"
          theme={{
            show: "translate-x-[-18%] opacity-100",
            hidden: "translate-x-[100%] opacity-0",
          }}
        >
          <TEModalContent style={{ width: "20%" }}>
            <TEModalHeader>
              {/* <!--Modal title--> */}
              <h5 className=" font-medium leading-normal text-[#2E3A59]">
                All Notifications
              </h5>
              {/* <!--Close button--> */}
              <button
                type="button"
                className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                onClick={() => setShowModalTopRight(false)}
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </TEModalHeader>
            {/* <!--Modal body--> */}
            <TEModalBody>
              <p className="text-sm hover:underline hover:cursor-pointer text-[#2E3A59] ">
                Modal body text goes here.
              </p>
            </TEModalBody>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
  );
};
export default Notification;
