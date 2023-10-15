import React, { useState } from "react";
import { Button, Modal } from "antd";
import PhotoTabs from "./PhotoTabs";

const PhotosModal = ({ open, setOpen, vehicleData }) => {
  console.log(vehicleData);

  return (
    <>
      <Modal
        title="Vehicle Images"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        okButtonProps={{ className: "hover:bg-none", type: "default" }}
      >
        <PhotoTabs vehicleData={vehicleData}></PhotoTabs>
      </Modal>
    </>
  );
};
export default PhotosModal;
