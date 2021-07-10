import React from "react";

// components

import FMTable from "components/Cards/FMTable.js";

export default function FeesManagement() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <CardTable />
        </div> */}
        <div className="w-full mb-12 px-4">
          <FMTable color="dark" />
        </div>
      </div>
    </>
  );
}
