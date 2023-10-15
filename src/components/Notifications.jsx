import React from "react";
import { Button, notification } from "antd";
const Notifications = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      message: <a href="">All notifications</a>,
      description:
        "I will never close automatically. This is a purposely very very long description that has many many characters and words.",
      duration: 0,
    });
  };
  return (
    <>
      {contextHolder}
      <Button
        className="border-none p-0 shadow-none"
        onClick={openNotification}
      >
        <svg
          width="34"
          height="34"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.9997 24.7275C14.7947 24.7275 13.8179 23.946 13.8179 22.982H18.1816C18.1816 23.946 17.2047 24.7275 15.9997 24.7275ZM24.727 22.1093H7.27246V20.3639L9.45428 19.4911V14.6911C9.45428 11.6697 11.0045 9.71048 13.8179 9.17549V7.27295H18.1816V9.17549C20.995 9.7096 22.5452 11.668 22.5452 14.6911V19.4911L24.727 20.3639V22.1093ZM15.9997 10.5457C14.6685 10.4769 13.3846 10.9535 12.5906 11.8111C11.9116 12.6704 11.5784 13.6756 11.6361 14.6911V20.3639H20.3634V14.6911C20.421 13.6756 20.0878 12.6704 19.4088 11.8111C18.6149 10.9535 17.331 10.4769 15.9997 10.5457Z"
            fill="#2E3A59"
          />
        </svg>
      </Button>
    </>
  );
};
export default Notifications;
