import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Dashboard from "views/admin/Dashboard.js";
import AdmissionManagement from "views/admin/AdmissionManagement.js";
import StudentManagement from "views/admin/StudentManagement.js";
import AttendanceManagement from "views/admin/AttendanceManagement.js";
import FeesManagement from "views/admin/FeesManagement.js";
import StudentAssessment from "views/admin/StudentAssessment.js";
import HumanResource from "views/admin/HumanResource.js";
import EmployeeLeaveManagement from "views/admin/EmployeeLeaveManagement.js";
import PayrollManagement from "views/admin/PayrollManagement.js";
import Certificates from "views/admin/Certificates.js";
import Scholarship from "views/admin/Scholarship.js";
import TimetableManagement from "views/admin/TimetableManagement.js";
import Academic from "views/admin/Academic.js";
import FrontOffice from "views/admin/FrontOffice.js";
import MIS from "views/admin/MIS.js";
import Health from "views/admin/Health.js";
import EventActivityManagement from "views/admin/EventActivityManagement.js";
import Maps from "views/admin/Maps.js";
import Settings from "views/admin/Settings.js";
import Tables from "views/admin/Tables.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/AdmissionManagement" exact component={AdmissionManagement} />
            <Route path="/admin/StudentManagement" exact component={StudentManagement} />
            <Route path="/admin/AttendanceManagement" exact component={AttendanceManagement} />
            <Route path="/admin/FeesManagement" exact component={FeesManagement} />
            <Route path="/admin/StudentAssessment" exact component={StudentAssessment} />
            <Route path="/admin/HumanResource" exact component={HumanResource} />
            <Route path="/admin/EmployeeLeaveManagement" exact component={EmployeeLeaveManagement} />
            <Route path="/admin/PayrollManagement" exact component={PayrollManagement} />
            <Route path="/admin/Certificates" exact component={Certificates} />
            <Route path="/admin/Scholarship" exact component={Scholarship} />
            <Route path="/admin/TimetableManagement" exact component={TimetableManagement} />
            <Route path="/admin/Academic" exact component={Academic} />
            <Route path="/admin/FrontOffice" exact component={FrontOffice} />
            <Route path="/admin/MIS" exact component={MIS} />
            <Route path="/admin/Health" exact component={Health} />
            <Route path="/admin/EventActivityManagement" exact component={EventActivityManagement} />
            <Route path="/admin/maps" exact component={Maps} />
            <Route path="/admin/settings" exact component={Settings} />
            <Route path="/admin/tables" exact component={Tables} />
            <Redirect from="/admin" to="/admin/dashboard" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
