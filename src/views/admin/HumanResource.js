import React from "react";

// components

import HRTable from "components/Cards/HRTable.js";

export default function HumanResource() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <HRTable />
        </div>
        {/* <div className="w-full mb-12 px-4">
          <HRTable color="dark" />
        </div> */}
      </div>
    </>
  );
}
