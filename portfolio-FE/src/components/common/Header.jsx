import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "../../assets/logo.png";

function Header() {
  const [navBackground, setNavBackground] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    setNavBackground(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed h-14 z-50 w-full border-b border-gray-50/10 transition-all duration-300 ${
        navBackground
          ? "bg-gradient-to-r from-gray-950 via-violet-950 to-gray-950 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="flex w-full items-center justify-between py-3 px-5">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-10 h-10" />
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon
            icon={menuOpen ? "line-md:menu-to-close-transition" : "line-md:close-to-menu-transition"}
            className="text-2xl text-white transition-all duration-1600"
          />
        </button>

        {/* Navigation Menu */}
        <ul
          className={`md:flex text-sm space-x-6 transition-all duration-300 ${
            menuOpen
              ? "absolute top-14 left-0 w-full bg-gray-900 p-5 flex flex-col justify-center items-center"
              : "hidden md:flex"
          }`}
        >
          {[
            { name: "HOME", href: "/#home" },
            { name: "ABOUT", href: "/#about" },
            { name: "SKILLS", href: "/#skills" },
            { name: "EDUCATION", href: "/#education" },
            { name: "PROJECTS", href: "/#projects" },
            { name: "CERTIFICATIONS", href: "/#certifications" },
          ].map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="block px-4 py-2 text-white transition-colors duration-300 hover:text-pink-600"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;