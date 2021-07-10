import React from "react";

// components

import AMTable from "components/Cards/AMTable.js";

export default function AdmissionManagement() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <CardTable />
        </div> */}
        <div className="w-full mb-12 px-4">
          <AMTable color="dark" />
        </div>
      </div>
    </>
  );
}
