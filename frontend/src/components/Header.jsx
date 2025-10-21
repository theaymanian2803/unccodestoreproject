import React, { useState } from "react";
import { ShoppingCart, Menu, X, User, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  return (
    <header>
      {/* OPEN: nav */}
      <nav className="bg-green-800 p-4">
        {/* OPEN: container */}
        <div className="container mx-auto flex items-center justify-between">
          <a href="/" className="text-white text-lg font-bold">
            UcStore
          </a>

          {/* OPEN: Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none">
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
          {/* CLOSE: Mobile Menu Button */}

          {/* OPEN: Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            {/* Cart Link (Desktop) */}
            <a
              href="/cart"
              className="text-gray-300 hover:text-white flex items-center">
              <ShoppingCart className="w-5 h-5 mr-1" />
              Cart
            </a>

            {/* OPEN: Desktop Dropdown Wrapper */}
            <div
              className="relative"
              onMouseEnter={() => setIsDesktopDropdownOpen(true)}
              onMouseLeave={() => setIsDesktopDropdownOpen(false)}>
              {/* Sign In Button (Desktop) */}
              <button className="text-gray-300 hover:text-white flex items-center focus:outline-none">
                <User className="w-5 h-5 mr-1" />
                Sign In
                <ChevronDown
                  className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                    isDesktopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* OPEN: Desktop Dropdown Menu */}
              <div
                className={`absolute right-0 mt-2 w-48 bg-green-900 rounded-md shadow-lg py-1 transition-all duration-200 z-10 
                              ${
                                isDesktopDropdownOpen
                                  ? "opacity-100 visible"
                                  : "opacity-0 invisible"
                              }`}>
                <a
                  href="/profile"
                  className="block px-4 py-2 text-white hover:bg-green-500">
                  Profile
                </a>
                <a
                  href="/settings"
                  className="block px-4 py-2 text-white hover:bg-green-500"></a>
                <a
                  href="/logout"
                  className="block px-4 py-2 text-white hover:bg-green-500">
                  Logout
                </a>
              </div>
              {/* CLOSE: Desktop Dropdown Menu */}
            </div>
            {/* CLOSE: Desktop Dropdown Wrapper */}
          </div>
          {/* CLOSE: Desktop Menu */}
        </div>
        {/* CLOSE: container */}

        {/* OPEN: Mobile Menu Content (Conditional) */}
        <div
          className={`md:hidden mt-2 space-y-2 ${
            isMobileMenuOpen ? "" : "hidden"
          }`}>
          {/* Cart Link (Mobile) */}
          <a
            href="/cart"
            className=" px-3 py-2 text-gray-300 hover:text-white hover:bg-green-700 rounded-md flex items-center">
            <ShoppingCart className="w-5 h-5 mr-1" />
            Cart
          </a>

          {/* OPEN: Mobile Dropdown Wrapper */}
          <div className="relative">
            {/* Sign In Button (Mobile) */}
            <button
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
              className=" w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-green-700 rounded-md flex items-center justify-between focus:outline-none">
              <span className="flex items-center">
                <User className="w-5 h-5 mr-1" />
                Sign In
              </span>
              <ChevronDown
                className={`w-4 h-4 transform transition-transform duration-200 ${
                  isMobileDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* OPEN: Mobile Dropdown Menu (Conditional) */}
            <div
              className={`mt-1 ml-4 space-y-1 bg-green-700 rounded-md ${
                isMobileDropdownOpen ? "block" : "hidden"
              }`}>
              <a
                href="/profile"
                className="block px-4 py-2 text-gray-300 hover:bg-green-600 rounded-md">
                Profile
              </a>

              <a
                href="/logout"
                className="block px-4 py-2 text-gray-300 hover:bg-green-600 rounded-md">
                Logout
              </a>
            </div>
            {/* CLOSE: Mobile Dropdown Menu (Conditional) */}
          </div>
          {/* CLOSE: Mobile Dropdown Wrapper */}
        </div>
        {/* CLOSE: Mobile Menu Content (Conditional) */}
      </nav>
      {/* CLOSE: nav */}
    </header>
  );
};
export default Header;
