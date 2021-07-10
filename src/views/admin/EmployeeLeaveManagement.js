import React from "react";

// components

import ELMTable from "components/Cards/ELMTable.js";

export default function EmployeeLeaveManagement() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <CardTable />
        </div> */}
        <div className="w-full mb-12 px-4">
          <ELMTable color="dark" />
        </div>
      </div>
    </>
  );
}
