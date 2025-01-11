import { useState } from "react";
import Link from "next/link";

export default function MobileNavHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      {/* Header Kontainer */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">MyBrand</div>
        {/* Burger Menu */}
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          &#9776;
        </button>
      </div>

      {/* Navigation Links */}
      {isOpen && (
        <ul className="flex flex-col mt-4 space-y-2 bg-gray-700 p-4 rounded-lg">
          <li className="border-b border-gray-600">
            <Link
              href="#home"
              className="block py-2 hover:text-blue-400 transition"
            >
              Home
            </Link>
          </li>
          <li className="border-b border-gray-600">
            <Link
              href="#about"
              className="block py-2 hover:text-blue-400 transition"
            >
              About
            </Link>
          </li>
          <li className="border-b border-gray-600">
            <Link
              href="#services"
              className="block py-2 hover:text-blue-400 transition"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="block py-2 hover:text-blue-400 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
