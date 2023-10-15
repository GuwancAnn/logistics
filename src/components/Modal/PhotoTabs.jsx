import React, { useState } from "react";
import { Tabs } from "antd";

const PhotoTabs = ({ vehicleData }) => {
  console.log(vehicleData);

  return (
    <Tabs
      defaultActiveKey="1"
      centered
      items={[
        {
          label: `USA YARD PHOTOS`,
          key: 1,
          children: vehicleData.map((item) => {
            console.log(item.photo);
            return item.photo?.map((photo) => {
              console.log(photo);
              console.log("http://132.148.79.178/" + `${photo.photo}`);
              return (
                <img
                  key={photo.id}
                  src={`http://132.148.79.178/` + `${photo.photo}`}
                  alt="Vehicle Photo"
                />
              );
            });
          }),
        },
        {
          label: `AUCTION PHOTOS`,
          key: 2,
          children: `aution `,
        },
        {
          label: `PICKEDUP PHOTOS`,
          key: 3,
          children: `picekd`,
        },
        {
          label: `ARRIVED PHOTOS`,
          key: 4,
          children: `arrived`,
        },
      ]}
    />
  );
};
export default PhotoTabs;
