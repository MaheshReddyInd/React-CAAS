import React from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

const IndexDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Demo Pages
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Admin Layout
        </span>
        <Link
          to="/admin/dashboard"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Dashboard
        </Link>
        <Link
          to="/admin/AdmissionManagement"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Admission Management
        </Link>
        <Link
          to="/admin/StudentManagement"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Student Management
        </Link>
        <Link
          to="/admin/AttendanceManagement"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Attendance Management
        </Link>
        <Link
          to="/admin/FeesManagement"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Fees Management
        </Link>
        <Link
          to="/admin/StudentAssessment"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Student Assessment
        </Link>
        <Link
          to="/admin/HumanResource"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Human Resource
        </Link>
        <Link
          to="/admin/EmployeeLeaveManagement"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Employee Leave Management
        </Link>
        <Link
          to="/admin/PayrollManagement"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Payroll Management
        </Link>
        <Link
          to="/admin/Certificates"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Certificates
        </Link>
        <Link
          to="/admin/Scholarship"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Scholarship
        </Link>
        <Link
          to="/admin/TimetableManagement"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Timetable Management
        </Link>
        <Link
          to="/admin/Academic"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Academic
        </Link>        
        <Link
          to="/admin/FrontOffice"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Front Office
        </Link>  
        <Link
          to="/admin/MIS"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          MIS
        </Link> 
        <Link
          to="/admin/Health"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Health
        </Link> 
        <Link
          to="/admin/EventActivityManagement"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Event & Activity Management
        </Link>       
        <Link
          to="/admin/settings"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Settings
        </Link>
        {/* <Link
          to="/admin/tables"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Tables
        </Link>
        <Link
          to="/admin/maps"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Maps
        </Link> */}
        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Auth Layout
        </span>
        <Link
          to="/auth/login"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Login
        </Link>
        <Link
          to="/auth/register"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Register
        </Link>
        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          No Layout
        </span>
        <Link
          to="/landing"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Landing
        </Link>
        <Link
          to="/profile"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Profile
        </Link>
      </div>
    </>
  );
};

export default IndexDropdown;
