import React, { useState } from "react";
import {
  TERipple,
  TEModal,
  TEModalDialog,
  TEModalContent,
  TEModalHeader,
  TEModalBody,
  TEModalFooter,
} from "tw-elements-react";

const ProfileModal = () => {
  const [showModalTopRight, setShowModalTopRight] = useState(false);

  return (
    <div>
      <div className="space-x-2 ">
        {/* <!--Button trigger top right modal--> */}

        <button
          type="button"
          className="inline-block rounded   text-xs font-medium uppercase leading-normal text-white "
          onClick={() => setShowModalTopRight(true)}
        >
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 34C20.1857 34.005 18.3943 33.5945 16.7633 32.7999C16.1663 32.5096 15.5944 32.1704 15.0533 31.7859L14.8889 31.6659C13.4007 30.5675 12.1839 29.1426 11.3321 27.5007C10.451 25.8014 9.99401 23.9141 10.0001 22C10.0001 15.3726 15.3726 10 22 10C28.6274 10 33.9999 15.3726 33.9999 22C34.0059 23.9132 33.5494 25.7996 32.6691 27.4983C31.8184 29.1392 30.6034 30.5636 29.1171 31.6623C28.5564 32.0727 27.9615 32.434 27.3387 32.7423L27.2428 32.7903C25.6107 33.5892 23.8171 34.003 22 34ZM22 27.9999C20.2018 27.9964 18.5532 29.0008 17.7316 30.6003C20.4213 31.9325 23.5787 31.9325 26.2684 30.6003V30.5943C25.4458 28.9965 23.7971 27.9944 22 27.9999ZM22 25.5999C24.5993 25.6033 26.996 27.0041 28.2747 29.2671L28.2927 29.2515L28.3095 29.2371L28.2891 29.2551L28.2771 29.2647C31.3119 26.6429 32.397 22.4108 30.9983 18.6521C29.5995 14.8934 26.0117 12.4004 22.0012 12.4004C17.9907 12.4004 14.4029 14.8934 13.0041 18.6521C11.6054 22.4108 12.6905 26.6429 15.7253 29.2647C17.0048 27.0028 19.4013 25.6031 22 25.5999ZM22 24.3999C19.3491 24.3999 17.2 22.2509 17.2 19.6C17.2 16.949 19.3491 14.8 22 14.8C24.6509 14.8 26.8 16.949 26.8 19.6C26.8 20.873 26.2942 22.0939 25.3941 22.9941C24.4939 23.8942 23.273 24.3999 22 24.3999ZM22 17.2C20.6745 17.2 19.6 18.2745 19.6 19.6C19.6 20.9254 20.6745 22 22 22C23.3255 22 24.4 20.9254 24.4 19.6C24.4 18.2745 23.3255 17.2 22 17.2Z"
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
            show: "translate-x-[-96px] opacity-100",
            hidden: "translate-x-[100%] opacity-0",
          }}
        >
          <TEModalContent style={{ width: "10%" }}>
            <TEModalHeader
              style={{ paddingBottom: "0px", justifyContent: "flex-end" }}
            >
              {/* <!--Modal title--> */}
              {/* <h5 className=" font-medium leading-normal text-[#2E3A59]">
                Profile
              </h5> */}
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
                  className="h-5 w-5"
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
            <TEModalBody style={{ paddingTop: "8px" }}>
              <div className="flex flex-col items-start">
                <button className="text-sm hover:underline hover:cursor-pointer mb-2 text-[#2E3A59] ">
                  Profile
                </button>
                <button className="text-sm hover:underline hover:cursor-pointer text-[#2E3A59] ">
                  Logout
                </button>
              </div>
            </TEModalBody>
          </TEModalContent>
        </TEModalDialog>
      </TEModal>
    </div>
  );
};
export default ProfileModal;
