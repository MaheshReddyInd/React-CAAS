import React from "react";

// components

import MISTable from "components/Cards/MISTable.js";

export default function MIS() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <MISTable />
        </div>
        {/* <div className="w-full mb-12 px-4">
          <MISTable color="dark" />
        </div> */}
      </div>
    </>
  );
}
