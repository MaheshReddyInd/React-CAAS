import React from "react";

// components

import STable from "components/Cards/STable.js";

export default function Scholarship() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <STable />
        </div>
        {/* <div className="w-full mb-12 px-4">
          <STable color="dark" />
        </div> */}
      </div>
    </>
  );
}
