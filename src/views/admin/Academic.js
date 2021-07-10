import React from "react";

// components

import ATable from "components/Cards/ATable.js";

export default function Academic() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <ATable />
        </div> */}
        <div className="w-full mb-12 px-4">
          <ATable color="dark" />
        </div>
      </div>
    </>
  );
}
