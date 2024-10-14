import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TiHomeOutline } from "react-icons/ti";
import { IoBagOutline, IoSettingsOutline } from "react-icons/io5";
import { HiOutlineChartBar, HiOutlineSpeakerphone } from "react-icons/hi";
import { RxExternalLink } from "react-icons/rx";
import { MdArrowForwardIos, MdOutlineAppShortcut } from "react-icons/md";
import Logo from "../assets/svgs/asab_logo2.svg";
import NotextLogo from "../assets/svgs/Logo_withouttext.svg";
import { BiShoppingBag } from "react-icons/bi";
import { RiPriceTag3Line } from "react-icons/ri";



const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [openMenus, setOpenMenus] = useState({});
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = (menuName) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menuName]: !prevState[menuName],
    }));
  };

  const menuItems = [
    {
      name: "Home",
      icon: <TiHomeOutline className="h-5 w-5" />,
      path: "/home",
    },
    {
      name: "Client",
      icon: <BiShoppingBag className="h-5 w-5" />,
      path: "/client",
    },
    {
      name: "Sales",
      icon: <HiOutlineSpeakerphone className="h-5 w-5" />,
      path: "/sales",
    },
    {
      name: "Packages",
      icon: <RiPriceTag3Line className="h-5 w-5" />,
      path: "/plansManagement/packages",
      children: [
        {
          name: "Packages",
          icon: <RxExternalLink className="h-5 w-5" />,
          path: "/plansManagement/packages",
        },
        {
          name: "Modules",
          icon: <RxExternalLink className="h-5 w-5" />,
          path: "/plansManagement/modules",
        },
        {
          name: "Management",
          icon: <RxExternalLink className="h-5 w-5" />,
          path: "/plansManagement/management",
        },
        {
          name: "Subscription History",
          icon: <RxExternalLink className="h-5 w-5" />,
          path: "/plansManagement/subscription_history",
        },
      ],
    },
    {
      name: "App",
      icon: <MdOutlineAppShortcut className="h-5 w-5" />,
      path: "/app",
    },
    {
      name: "Report",
      icon: <HiOutlineChartBar className="h-5 w-5" />,
      path: "/report/clients",
      children: [
        {
          name: "Clients",
          icon: <HiOutlineChartBar className="h-5 w-5" />,
          path: "/report/clients",
        },
        {
          name: "Sales",
          icon: <HiOutlineChartBar className="h-5 w-5" />,
          path: "/report/sales",
        },
        {
          name: "Packages",
          icon: <HiOutlineChartBar className="h-5 w-5" />,
          path: "/report/packages",
        },
        {
          name: "Modules And Features",
          icon: <HiOutlineChartBar className="h-5 w-5" />,
          path: "/report/modules",
        },
        {
          name: "Subscription History",
          icon: <HiOutlineChartBar className="h-5 w-5" />,
          path: "/report/subscription_history",
        },
      ],
    },
    {
      name: "Setup",
      icon: <IoSettingsOutline className="h-5 w-5" />,
      path: "/setup",
    },
  ];

  // Check if any child of the parent menu is active
  const isChildActive = (children) => {
    return children?.some((child) => location.pathname.startsWith(child.path));
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
        animate={{ width: isOpen ? 220 : 60 }} // Adjusted width here
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
                className="relative rounded-full border hover:border-primaryhover border-black p-[6px] ml-8 mt-2 cursor-pointer"
              >
                <span className="absolute top-1/2 mx-auto transform -translate-x-1/3 -translate-y-1/2 w-[2px] h-[2px] bg-black hover:bg-primaryhover rounded-full"></span>
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
                  // Main Menu Item with Children
                  <div
                    className={`flex items-center cursor-pointer transition-all duration-200 ${
                      isParentActive
                        ? "bg-[#FAFAFA] text-primary rounded-xl"
                        : "hover:bg-[#FAFAFA] hover:text-primary rounded-xl"
                    }`}
                    onClick={() => toggleMenu(item.name)}
                    style={{
                      height: "42px", // height
                      width: "210px", // width
                      borderRadius: "6px", // border radius
                      marginBottom: "4px", // space between fields
                    }}
                  >
                    <div className="flex items-center w-full gap-4 p-3 group">
                      {/* Only main menu item icon gets the hover effect */}
                      <motion.div className="group-hover:scale-110 transition-transform duration-200">
                        {item.icon}
                      </motion.div>
                      {isOpen && <span className="">{item.name}</span>}
                      {isOpen && (
                        <span className="ml-auto">
                          {openMenus[item.name] || isParentActive ? (
                            <IoIosArrowUp />
                          ) : (
                            <MdArrowForwardIos size={14} />
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                ) : (
                  // Main Menu Item without Children
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex items-center ${
                        isOpen
                          ? isActive
                            ? "bg-primary text-white rounded-xl w-full p-3 my-2 group"
                            : "hover:text-primary hover:bg-[#FAFAFA] p-3 group"
                          : isActive
                          ? "bg-primary text-white w-full p-3 rounded-xl my-2 group"
                          : "hover:text-primary p-3 group"
                      }`
                    }
                    style={{
                      height: "42px", // height
                      width: "210px", // width
                      borderRadius: "6px", // border radius
                      marginBottom: "4px", // space between fields
                    }}
                  >
                    <motion.div className="transition-transform duration-200 group-hover:scale-110">
                      {item.icon}
                    </motion.div>
                    {isOpen && <span className="ml-4">{item.name}</span>}
                  </NavLink>
                )}

                {item.children && (
                  <AnimatePresence>
                    {(openMenus[item.name] || isParentActive) && isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="flex flex-col "
                      >
                        {item.children.map((child, childIndex) => {
                          const isChildPathActive =
                            location.pathname === child.path;

                          return (
                            <NavLink
                            key={childIndex}
                            to={child.path}
                            className={({ isActive }) =>
                              `flex items-center p-3 text-sm rounded-lg transition-all duration-200 pl-5 ${
                                isActive
                                  ? "bg-primary text-white"
                                  : "hover:bg-[#FAFAFA] hover:text-primary"
                              }`
                            }
                            style={{
                              height: "42px", // height
                              width: "210px", // width
                              borderRadius: "6px", // border radius
                              marginBottom: "4px", // space between fields
                            }}
                          >
                            {/* Transparent dot with border color matching the text color */}
                            <span className="w-2 h-2 rounded-full border-2 border-current mr-3"></span>
                            <span className="ml-4">{child.name}</span>
                          </NavLink>
                          
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>
      </motion.div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
