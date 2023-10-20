import React, { useState } from "react";
import { Tabs } from "antd";

const PhotoTabs = ({ vehiclePhoto }) => {
  console.log(vehiclePhoto);

  return (
    <Tabs
      defaultActiveKey="1"
      centered
      items={[
        {
          label: `USA YARD PHOTOS`,
          key: 1,
          children:
            vehiclePhoto === null ? (
              <p>No photo available</p>
            ) : (
              <img
                src={`http://132.148.79.178/${vehiclePhoto[0].photo}`}
                alt="Vehicle Photo"
              />
            ),
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
