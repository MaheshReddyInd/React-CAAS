import React from "react";

// components

import HTable from "components/Cards/HTable.js";

export default function Health() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <CardTable />
        </div> */}
        <div className="w-full mb-12 px-4">
          <HTable color="dark" />
        </div>
      </div>
    </>
  );
}
