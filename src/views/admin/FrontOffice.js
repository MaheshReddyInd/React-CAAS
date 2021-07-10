import React from "react";

// components

import FOTable from "components/Cards/FOTable.js";

export default function FrontOffice() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <CardTable />
        </div> */}
        <div className="w-full mb-12 px-4">
          <FOTable color="dark" />
        </div>
      </div>
    </>
  );
}
