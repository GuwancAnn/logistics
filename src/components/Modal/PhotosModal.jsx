import React, { useState } from "react";
import { Button, Modal } from "antd";
import PhotoTabs from "./PhotoTabs";

const PhotosModal = ({ open, setOpen, vehiclePhoto }) => {
  //console.log(vehicleData);

  return (
    <>
      <Modal
        title="Vehicle Images"
        centered
        open={open}
        onOk={() => setOpen(null)}
        onCancel={() => setOpen(null)}
        width={1000}
        okButtonProps={{ className: "hover:bg-none", type: "default" }}
      >
        <PhotoTabs vehiclePhoto={vehiclePhoto}></PhotoTabs>
      </Modal>
    </>
  );
};
export default PhotosModal;
