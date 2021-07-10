import React from "react";

// components

import SMTable from "components/Cards/SMTable.js";

export default function StudentManagement() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <SMTable />
        </div>
        {/* <div className="w-full mb-12 px-4">
          <SMTable color="dark" />
        </div> */}
      </div>
    </>
  );
}
