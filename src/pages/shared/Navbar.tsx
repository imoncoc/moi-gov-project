import { Dropdown } from "antd";
import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  aboutUsList,
  affiliatedList,
  projectsList,
  contactCommentList,
} from "./NavbarList";

const Navbar = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  return (
    <nav className="container relative mx-auto ">
      {/* <!-- Flex Container For Nav Items --> */}
      <div className="flex items-center justify-between space-x-20 my-6">
        {/* <!-- Logo  --> */}
        <div className="z-30">
          {/* <img src="./images/logo-bookmark.svg" alt="" id="logo" /> */}
          <NavLink
            to={"/"}
            className="font-bold text-3xl uppercase text-gray-500"
          >
            {/* Green<span className="text-lime-500">LN</span> */}
            <img
              className="size-14"
              src="https://moi.gov.bd/themes/responsive_npf/img/logo/logo.png"
              alt=""
            />
          </NavLink>
        </div>
        {/* <!-- Menu Items --> */}
        <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
          <Dropdown
            className="hover:text-lime-500"
            menu={{ items: aboutUsList }}
            placement="bottomLeft"
          >
            <NavLink
              to={"/about-us"}
              className={({ isActive }) =>
                isActive
                  ? " tracking-widest text-softBlue"
                  : "tracking-widest hover:text-softBlue"
              }
            >
              About us
            </NavLink>
          </Dropdown>
          <Dropdown
            className="hover:text-lime-500"
            menu={{ items: affiliatedList }}
            placement="bottomLeft"
          >
            <NavLink
              to={"/affiliated-offices/Institutions"}
              className="tracking-widest hover:text-softBlue"
            >
              Affiliated Offices/Institutions
            </NavLink>
          </Dropdown>
          <Dropdown
            className="hover:text-lime-500"
            menu={{ items: projectsList }}
            placement="bottomLeft"
          >
            <NavLink
              to={"/projects"}
              className="tracking-widest hover:text-softBlue"
            >
              Projects
            </NavLink>
          </Dropdown>
          <Dropdown
            className="hover:text-lime-500"
            menu={{ items: contactCommentList }}
            placement="bottomLeft"
          >
            <NavLink
              to={"/contact&comment"}
              className="tracking-widest hover:text-softBlue"
            >
              Contact & Comment
            </NavLink>
          </Dropdown>
        </div>
        {/* <!-- Hamburger Button --> */}
        <button
          id="menu-btn"
          className={` z-30 block md:hidden focus:outline-none hamburger
            ${isHamburgerMenuOpen ? "open" : ""}
            `}
          onClick={() => setIsHamburgerMenuOpen(!isHamburgerMenuOpen)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* <!-- Mobile Menu --> */}

      <div
        id="menu"
        className={`
            ${isHamburgerMenuOpen ? "flex" : "hidden"}
            fixed inset-0 z-20 flex-col items-center self-end w-full h-full m-h-screen px-6 py-1 pt-24 pb-4 tracking-widest text-white uppercase divide-y divide-gray-500 opacity-90 bg-veryDarkBlue`}
      >
        <div className="w-full py-3 text-center">
          <NavLink
            to={"/about-us"}
            className={({ isActive }) =>
              isActive ? " block text-softBlue" : "block hover:text-softBlue"
            }
          >
            About us
          </NavLink>
        </div>
        <div className="w-full py-3 text-center">
          <NavLink
            to={"/affiliated-offices/Institutions"}
            className="block hover:text-softBlue"
          >
            Affiliated Offices/Institutions
          </NavLink>
        </div>
        <div className="w-full py-3 text-center">
          <NavLink to={"/projects"} className="block hover:text-softBlue">
            Projects
          </NavLink>
        </div>
        <div className="w-full py-3 text-center">
          <NavLink
            to={"/contact&comment"}
            className="block hover:text-softBlue"
          >
            Contact & Comment
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
