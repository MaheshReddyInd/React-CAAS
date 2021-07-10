/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-6 text-blueGray-800 mr-0 inline-block whitespace-nowrap text-sm font-bold p-4 px-0"
            to="/"
          >
            EduKarnataka
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    EduKarnataka
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/dashboard") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/dashboard"
                >
                  <i
                    className={
                      "fas fa-tv mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/dashboard") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Dashboard
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs  py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/AdmissionManagement") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/AdmissionManagement"
                >
                  <i
                    className={
                      "fas fa-users mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/AdmissionManagement") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Admission Management
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/StudentManagement") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/StudentManagement"
                >
                  <i
                    className={
                      "fas fa-user mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/StudentManagement") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Student Management
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/AttendanceManagement") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/AttendanceManagement"
                >
                  <i
                    className={
                      "fas fa-link mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/AttendanceManagement") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Attendance  Management
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/FeesManagement") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/FeesManagement"
                >
                  <i
                    className={
                      "fas fa-rss mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/FeesManagement") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Fees  Management
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/StudentAssessment") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/StudentAssessment"
                >
                  <i
                    className={
                      "fas fa-user mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/StudentAssessment") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Student Assessment
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/HumanResource") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/HumanResource"
                >
                  <i
                    className={
                      "fas fa-users mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/HumanResource") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Human Resource
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/EmployeeLeaveManagement") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/EmployeeLeaveManagement"
                >
                  <i
                    className={
                      "fas fa-archway mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/EmployeeLeaveManagement") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Emp. Leave Management
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/PayrollManagement") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/PayrollManagement"
                >
                  <i
                    className={
                      "fas fa-book mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/PayrollManagement") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Payroll  Management
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/Certificates") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/Certificates"
                >
                  <i
                    className={
                      "fas fa-certificate mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/Certificates") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Certificates
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/Scholarship") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/Scholarship"
                >
                  <i
                    className={
                      "fas fa-school mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/Scholarship") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Scholarship
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/TimetableManagement") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/TimetableManagement"
                >
                  <i
                    className={
                      "fas fa-clock mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/TimetableManagement") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Timetable  Management
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/Academic") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/Academic"
                >
                  <i
                    className={
                      "fas fa-adjust mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/Academic") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Academic
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/FrontOffice") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/FrontOffice"
                >
                  <i
                    className={
                      "fas fa-building mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/FrontOffice") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Front Office
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/MIS") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/MIS"
                >
                  <i
                    className={
                      "fas fa-blender mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/MIS") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  MIS
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/Health") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/Health"
                >
                  <i
                    className={
                      "fas fa-weight mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/Health") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Health
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/EventActivityManagement") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/EventActivityManagement"
                >
                  <i
                    className={
                      "fas fa-skiing mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/EventActivityManagement") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Activity Management
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/settings") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/settings"
                >
                  <i
                    className={
                      "fas fa-tools mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/settings") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Settings
                </Link>
              </li>

              {/* <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/tables") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/tables"
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/tables") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Tables
                </Link>
              </li> */}

              {/* <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/admin/maps") !== -1
                      ? "text-lightBlue-500 hover:text-lightBlue-600"
                      : "text-blueGray-700 hover:text-blueGray-500")
                  }
                  to="/admin/maps"
                >
                  <i
                    className={
                      "fas fa-map-marked mr-2 text-sm " +
                      (window.location.href.indexOf("/admin/maps") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Maps
                </Link>
              </li> */}
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Auth Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/auth/login"
                >
                  <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{" "}
                  Login
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/auth/register"
                >
                  <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>{" "}
                  Register
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs py-3 font-bold block"
                  to="/Onboarding/EduKarnatakaDashboard"
                >
                  <i className="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i>{" "}
                  EDUKarnataka Dashboard
                </Link>
              </li>

              {/* <li className="items-center">
                <Link
                  className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  to="/profile"
                >
                  <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>{" "}
                  Profile Page
                </Link>
              </li> */}
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            {/* <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Documentation
            </h6> */}
            {/* Navigation */}
            {/* <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/colors/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fas fa-paint-brush mr-2 text-blueGray-300 text-base"></i>
                  Styles
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-css3-alt mr-2 text-blueGray-300 text-base"></i>
                  CSS Components
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-angular mr-2 text-blueGray-300 text-base"></i>
                  Angular
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-js-square mr-2 text-blueGray-300 text-base"></i>
                  Javascript
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-react mr-2 text-blueGray-300 text-base"></i>
                  NextJS
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-react mr-2 text-blueGray-300 text-base"></i>
                  React
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fas fa-link mr-2 text-blueGray-300 text-base"></i>
                  Svelte
                </a>
              </li>

              <li className="inline-flex">
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus"
                  target="_blank"
                  className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
                >
                  <i className="fab fa-vuejs mr-2 text-blueGray-300 text-base"></i>
                  VueJS
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    </>
  );
}
