import React from "react";

// components

import EAMTable from "components/Cards/EAMTable.js";

export default function EventActivityManagement() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <CardTable />
        </div> */}
        <div className="w-full mb-12 px-4">
          <EAMTable color="dark" />
        </div>
      </div>
    </>
  );
}
