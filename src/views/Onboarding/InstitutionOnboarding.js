import React from "react";

// components

import IOTable from "components/Cards/IOTable.js";

export default function InstitutionOnboarding() {
  return (
    <>
    <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full"></div>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <CardTable />
        </div> */}
        <div className="w-full mb-12 px-4">
          <IOTable color="dark" />
        </div>
      </div>
      </div>
    </>
  );
}
