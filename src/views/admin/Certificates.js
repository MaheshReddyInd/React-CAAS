import React from "react";

// components

import CTable from "components/Cards/CTable.js";

export default function Certificates() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <CardTable />
        </div> */}
        <div className="w-full mb-12 px-4">
          <CTable color="dark" />
        </div>
      </div>
    </>
  );
}
