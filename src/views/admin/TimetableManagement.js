import React from "react";

// components

import TMTable from "components/Cards/TMTable.js";

export default function TimetableManagement() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <TMTable />
        </div>
        {/* <div className="w-full mb-12 px-4">
          <TMTable color="dark" />
        </div> */}
      </div>
    </>
  );
}
