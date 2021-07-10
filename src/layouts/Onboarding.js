import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import EduKarnatakaAdminNavbar from "components/Navbars/EduKarnatakaAdminNavbar.js";
import EduKarnatakaSidebar from "components/Sidebar/EduKarnatakaSidebar.js";
//import EduKarnatakaHeaderStats from "components/Headers/EduKarnatakaHeaderStats.js";
import FooterEduKarnataka from "components/Footers/FooterEduKarnataka.js";

// views


import EduKarnatakaDashboard from "views/Onboarding/EduKarnatakaDashboard.js";
import InstitutionOnboarding from "views/Onboarding/InstitutionOnboarding.js";
import StaffOnboarding from "views/Onboarding/StaffOnboarding.js";
import StudentOnboarding from "views/Onboarding/StudentOnboarding.js";

export default function Onboarding() {
  return (
    <>
     
      <EduKarnatakaSidebar/>
      <div className="relative md:ml-64 bg-blueGray-100">
        
        <EduKarnatakaAdminNavbar/>
        {/* Header */}
        {/* <EduKarnatakaHeaderStats /> */}
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>

            <Route path="/Onboarding/EduKarnatakaDashboard" exact component={EduKarnatakaDashboard} />
            <Route path="/Onboarding/InstitutionOnboarding" exact component={InstitutionOnboarding} />
            <Route path="/Onboarding/StaffOnboarding" exact component={StaffOnboarding} />
            <Route path="/Onboarding/StudentOnboarding" exact component={StudentOnboarding} />

            <Redirect from="/Onboarding" to="/Onboarding/EduKarnatakaDashboard" />
          </Switch>
          <FooterEduKarnataka />
        </div>
      </div>
    </>
  );
}
