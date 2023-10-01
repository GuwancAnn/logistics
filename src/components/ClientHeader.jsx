import React from "react";
import Dropdown from "./Dropdown";
import Language from "./Language";
import Notification from "./Notifications";
import ProfileModal from "./ProfileModal";
import { useNavigate } from "react-router-dom";
const ClientHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="container flex justify-between items-center mx-auto mt-8">
          <img src="" alt="" className="w-32 h-12" />
          <div className="flex  justify-between text-[#2E3A59] items-center text-center text-lg">
            <button className="w-32" onClick={() => navigate("/client")}>
              Home
            </button>
            <button onClick={() => navigate("/vehicle")} className="w-32">
              Vehicles
            </button>
            <button onClick={() => navigate("/container")} className="w-32">
              Container
            </button>
            <button onClick={() => navigate("/price")} className="w-32">
              Price
            </button>

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
