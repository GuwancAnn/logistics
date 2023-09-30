import React from "react";
import Dropdown from "./Dropdown";
import Language from "./Language";
import Notification from "./Notifications";
import ProfileModal from "./ProfileModal";

const ClientHeader = () => {
  return (
    <>
      <div>
        <div className="container flex justify-between items-center mx-auto mt-8">
          <img src="" alt="" className="w-32 h-12" />
          <div className="flex  justify-between text-[#2E3A59] items-center text-center text-lg">
            <p className="w-32">Home</p>
            <p className="w-32">Vehicles</p>
            <p className="w-32">Container</p>
            <p className="w-32">Price</p>

            <Dropdown></Dropdown>
          </div>
          <div className="flex items-center">
            <Language></Language>
            <Notification></Notification>
            <ProfileModal></ProfileModal>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientHeader;
