import React from "react";

// components

import PMTable from "components/Cards/PMTable.js";

export default function PayrollManagement() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <CardTable />
        </div> */}
        <div className="w-full mb-12 px-4">
          <PMTable color="dark" />
        </div>
      </div>
    </>
  );
}
