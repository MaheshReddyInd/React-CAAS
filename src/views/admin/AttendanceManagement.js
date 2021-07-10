import React from "react";

// components

import ATMTable from "components/Cards/ATMTable.js";

export default function AttendanceManagement() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <CardTable />
        </div> */}
        <div className="w-full mb-12 px-4">
          <ATMTable color="dark" />
        </div>
      </div>
    </>
  );
}
