import { useState } from "react";
import { Link } from "wouter";
import { Menu } from "lucide-react";

const Navigation = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const navLinks = [
    { href: "#home", label: "Home", className: "text-darkblue" },
    { href: "#about", label: "About", className: "text-gray-700" },
    { href: "#courses", label: "Courses", className: "text-gray-700" },
    { href: "#testimonials", label: "Testimonials", className: "text-gray-700" },
    { href: "#contact", label: "Contact", className: "text-gray-700" },
  ];

  return (
    <nav className="bg-white nav-shadow fixed w-full z-10">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-primary">
              KOBA<span className="text-darkblue">MELO</span> COLLEGE
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`${link.className} font-medium hover:text-skyblue transition-colors duration-300`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://forms.gle/example"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-darkblue text-white px-4 py-2 rounded-md hover:bg-skyblue transition duration-300 pulse-animation"
            >
              Apply Now
            </a>
          </div>
          <div className="md:hidden">
            <button
              className="mobile-menu-button focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`mobile-menu md:hidden bg-white py-4 px-6 ${
          mobileMenuVisible ? "block" : "hidden"
        }`}
      >
        {navLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="block py-2 text-gray-700 hover:text-skyblue transition-colors duration-300"
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://forms.gle/example"
          target="_blank"
          rel="noopener noreferrer"
          className="block mt-2 bg-darkblue text-white px-4 py-2 rounded-md text-center hover:bg-skyblue transition duration-300"
        >
          Apply Now
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
