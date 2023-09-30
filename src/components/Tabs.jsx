import React from "react";

import { Tabs, Tab } from "@nextui-org/react";

export default function TabsComp() {
  return (
    <div className="flex flex-wrap gap-4">
      <Tabs
        key={"tabs"}
        variant={"bordered"}
        aria-label="Tabs variants "
        className="bg-gray-200"
      >
        <Tab key="photos" title="Photos" className="p-4 bg-white" />
        <Tab key="music" title="Music" />
        <Tab key="videos" title="Videos" />
      </Tabs>
    </div>
  );
}
