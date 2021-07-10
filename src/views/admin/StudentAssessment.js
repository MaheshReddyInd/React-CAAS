import React from "react";

// components

import SATable from "components/Cards/SATable.js";

export default function StudentAssessment() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        {/* <div className="w-full mb-12 px-4">
          <CardTable />
        </div> */}
        <div className="w-full mb-12 px-4">
          <SATable color="dark" />
        </div>
      </div>
    </>
  );
}
