import { Link } from "wouter";
import { Facebook } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#courses", label: "Courses" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" }
  ];

  const courseLinks = [
    { href: "#courses", label: "Early Childhood Development" },
    { href: "#courses", label: "Safety Management" },
    { href: "#courses", label: "First Aid" },
    { href: "#courses", label: "Computer Literacy" }
  ];

  return (
    <footer className="bg-darkblue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h3 className="text-xl font-bold mb-4">Kobamelo College</h3>
            <p className="mb-4">"Empowering Minds, Enriching Futures"</p>
            <p>Established in 2023, Kobamelo College is committed to providing high-quality education and training programs.</p>
          </div>
          
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-skyblue transition duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h4 className="text-lg font-bold mb-4">Courses</h4>
            <ul className="space-y-2">
              {courseLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="hover:text-skyblue transition duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:w-1/4">
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <p className="mb-2">2283 Extension 10 Tswelelang Location</p>
            <p className="mb-2">Wolmaransstad, 2630</p>
            <p className="mb-2">Email: kobamelocollege@gmail.com</p>
            <p className="mb-4">Phone: 073 747 5150 / 078 990 3012</p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/kobamelocollege" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-darkblue p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-skyblue transition duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} Kobamelo College. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-skyblue transition duration-300">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-skyblue transition duration-300">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
