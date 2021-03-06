import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { IconContext } from "react-icons";
import "./Navbar.css";

function Navbar() {
// {
//   showSideDrawer,
//   closeSideDrawer
// }
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    console.log("sidebarVal: ", sidebar);
  }, [sidebar]);

  // const closeSidebar = () => {
  //   if (closeSideDrawer) {
  //     closeSideDrawer();
  //   }
  // };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={() => showSidebar()} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          {/* <nav className={showSideDrawer ? "nav-menu active" : "nav-menu"}> */}
          <ul className="nav-menu-items" onClick={() => showSidebar()}>
            {/* <ul className="nav-menu-items" onClick={() => closeSidebar()}> */}
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
