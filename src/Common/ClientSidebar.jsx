import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { TiHomeOutline } from "react-icons/ti";
import Logo from "../assets/svgs/asab_logo2.svg";
import NotextLogo from "../assets/svgs/Logo_withouttext.svg";
import { LiaUsersCogSolid } from "react-icons/lia";

const ClientSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openMenus, setOpenMenus] = useState({});
  const location = useLocation();

  // Function to toggle the sidebar open and close
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle sub-menus
  const toggleMenu = (menuName) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };

  // Menu items
  const menuItems = [
    {
      name: "Home",
      icon: <TiHomeOutline className="h-6 w-6" />,
      path: "/home",
    },
    {
      name: "People Management",
      icon: <LiaUsersCogSolid className="h-6 w-6 ms-3 " />,
      path: "#",
      children: [
        {
          name: "Company Information",
          path: "/peopleManagement/companyInformation",
        },
        {
          name: "Company Structure",
          path: "/peopleManagement/companyStructure",
        },
        {
          name: "Employees",
          path: "/peopleManagement/employees",
        },
        {
          name: "Employee Structure",
          path: "/peopleManagement/employeeStructure",
        },
        {
          name: "Onboarding",
          path: "/peopleManagement/onBoarding",
        },
        {
          name: "Offboarding",
          path: "/peopleManagement/offBoarding",
        },
        {
          name: "Requests Management",
          path: "#",
          children: [
            {
              name: "All Request",
              path: "/peopleManagement/requestsManagement/AllRequest",
            },
            {
              name: "HR Request",
              path: "/peopleManagement/requestsManagement/hrRequest",
            },
            {
              name: "Financial Request",
              path: "/peopleManagement/requestsManagement/financialRequest",
            },
            {
              name: "Time Request",
              path: "/peopleManagement/requestsManagement/timeRequest",
            },
           
          ],
        },
      ],
    },
  ];

  // Function to check if any child of a parent menu is active
  const isChildActive = (children) => {
    return children?.some((child) => location.pathname.startsWith(child.path));
  };

  // Recursive function to render child items
  const renderChildren = (children, parentName) => {
    return (
      <AnimatePresence>
        {(openMenus[parentName] || isChildActive(children)) && isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex flex-col"
          >
            {children.map((child, childIndex) => (
              <div key={childIndex}>
                {child.children ? (
                  <div
                    className={`flex items-center cursor-pointer transition-all duration-300 ease-in-out group ${
                      isChildActive(child.children)
                        ? "bg-[#FAFAFA] text-primary rounded-xl"
                        : "hover:bg-[#FAFAFA] hover:text-primary rounded-xl"
                    }`}
                    onClick={() => toggleMenu(child.name)}
                    style={{
                      height: "42px",
                      width: "214px",
                      borderRadius: "6px",
                      marginBottom: "4px",
                    }}
                  >
                    <div className="flex items-center w-full gap-2">
                      {/* Adjust the circle icon for vertical alignment */}
                      <span
                        className="rounded-full p-1 border transition-colors duration-200 border-black group-hover:border-primary flex items-center justify-center w-2 h-2"
                      ></span>
                      {isOpen && (
                        <span className="text-sm transition-transform duration-300 ease-in-out transform group-hover:translate-x-1">
                          {child.name}
                        </span>
                      )}
                      {isOpen && (
                        <span className="ml-auto">
                          {openMenus[child.name] ? (
                            <RiArrowRightSLine className="size-5" />
                          ) : (
                            <RiArrowRightSLine className="size-5" />
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={child.path}
                    className={({ isActive }) =>
                      `group flex items-center p-3 text-sm rounded-lg transition-all duration-200 pl-5 ${
                        isActive
                          ? "bg-primary text-white"
                          : "hover:bg-[#FAFAFA] hover:text-primary"
                      }`
                    }
                    style={{
                      height: "42px",
                      width: "210px",
                      borderRadius: "6px",
                      marginBottom: "4px",
                    }}
                  >
                    <span
                      className={`rounded-full p-1 border transition-colors duration-200 ${
                        location.pathname === child.path
                          ? "border-white"
                          : "border-black group-hover:border-primary"
                      } flex items-center justify-center w-2 h-2`}
                    ></span>
                    <span className="ml-4">{child.name}</span>
                  </NavLink>
                )}

                {child.children && renderChildren(child.children, child.name)}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <>
      <div className="md:hidden flex items-center p-4 bg-backgroundPaper">
        <FaBars
          className="h-6 w-6 cursor-pointer fixed top-5 left-1"
          onClick={toggleSidebar}
        />
      </div>
      <motion.div
        animate={{ width: isOpen ? 220 : 60 }}
        className={`bg-backgroundPaper text-textprimary shadow-round h-screen overflow-y-auto flex flex-col font-sans fixed z-30 top-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center">
          {isOpen ? (
            <div className="flex justify-between items-center py-2">
              <button className="py-2 focus:outline-none flex justify-center">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-[10rem] h-10 object-cover"
                />
              </button>
              <span
                onClick={toggleSidebar}
                className="relative rounded-full border  border-slate-900 p-[6px] ml-8 mt-2 cursor-pointer"
              >
                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-slate-900 rounded-full"></span>
              </span>
            </div>
          ) : (
            <button
              onClick={toggleSidebar}
              className="p-3 mx-auto focus:outline-none flex justify-center"
            >
              <img
                src={NotextLogo}
                alt="Logo"
                className="w-10 h-10 object-cover"
              />
            </button>
          )}
        </div>
        <div className="h-[2px] w-full bg-gray-200"></div>
        <div className="flex-1 mt-4">
          {menuItems.map((item, index) => {
            const isParentActive = isChildActive(item.children);

            return (
              <div key={index} className="flex flex-col ml-1">
                {item.children ? (
                  <div
                    className={`flex items-center  cursor-pointer transition-all duration-300 ease-in-out group ${
                      isParentActive
                        ? "bg-[#FAFAFA] text-primary rounded-xl"
                        : "hover:bg-[#FAFAFA] hover:text-primary rounded-xl"
                    }`}
                    onClick={() => toggleMenu(item.name)}
                    style={{
                      height: "42px",
                      width: "214px",
                      borderRadius: "6px",
                      marginBottom: "4px",
                    }}
                  >
                    <div className="flex items-center w-full gap-2">
                      <span className="transition-transform duration-300 ease-in-out transform group-hover:scale-125">
                        {item.icon}
                      </span>
                      {isOpen && (
                        <span className="text-sm   transition-transform duration-300 ease-in-out transform group-hover:translate-x-1">
                          {item.name}
                        </span>
                      )}
                      {isOpen && (
                        <span className="ml-auto ">
                          {openMenus[item.name] ? (
                            <RiArrowRightSLine className="size-5" />
                          ) : (
                            <RiArrowRightSLine className="size-5" />
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center group ${
                        isOpen
                          ? isActive
                            ? "bg-primary text-white rounded-xl w-full p-3 my-2"
                            : "hover:text-primary hover:bg-[#FAFAFA] p-3"
                          : isActive
                          ? "bg-primary text-white w-full p-3 rounded-xl my-2"
                          : "hover:text-primary p-3"
                      }`
                    }
                    style={{
                      height: "42px",
                      width: "210px",
                      borderRadius: "6px",
                      marginBottom: "4px",
                    }}
                  >
                    <span className="transition-transform duration-300 ease-in-out transform group-hover:scale-125">
                      {item.icon}
                    </span>
                    {isOpen && (
                      <span className="ml-4 transition-transform duration-300 ease-in-out transform group-hover:translate-x-2">
                        {item.name}
                      </span>
                    )}
                  </NavLink>
                )}

                {item.children && renderChildren(item.children, item.name)}
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default ClientSidebar;
