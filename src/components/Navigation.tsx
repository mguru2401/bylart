import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Blogs & News", path: "/blogs" },
    {
      label: "Bach Flower Remedies",
      submenu: [
        { label: "Introduction", path: "/remedies/introduction" },
        { label: "Each Essence", path: "/remedies/essences" },
        { label: "How to Use", path: "/remedies/how-to-use" },
        { label: "Seven Groups", path: "/remedies/seven-groups" },
      ],
    },
    { label: "Success Stories", path: "/success-stories" },
    { label: "Expert Advice", path: "/expert-advice" },
    { label: "FAQ", path: "/faq" },
    {
      label: "Therapists",
      submenu: [
        { label: "Find A Therapist", path: "/therapists/find" },
        { label: "About Therapists", path: "/therapists/about" },
        { label: "Book Appointment", path: "/therapists/book" },
      ],
    },
    { label: "Resources", path: "/resources" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-lg h-20" : "bg-transparent h-24"
      }`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="flex items-center space-x-3 transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src="/34.png"
              alt="Bylart Bach Flower Therapy Logo"
              className="h-12 w-auto object-contain"
            />

            <div className="flex flex-col justify-center leading-tight">
              <span
                className={`text-2xl font-bold transition-colors duration-300 ${
                  isScrolled ? "text-emerald-700" : "text-white"
                }`}
                style={{ fontFamily: "Georgia, serif", lineHeight: "1.1" }}
              >
                BYLART
              </span>
              <span
                className={`text-xs tracking-wide transition-colors duration-300 ${
                  isScrolled ? "text-emerald-600" : "text-emerald-100"
                }`}
                style={{ lineHeight: "1.2" }}
              >
                Bach Flower Therapy
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        isScrolled
                          ? "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                          : "text-white hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <div className="py-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.path}
                            className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      location.pathname === item.path
                        ? isScrolled
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-white/20 text-white"
                        : isScrolled
                          ? "text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                          : "text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? "text-gray-700 hover:bg-emerald-50"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ top: isScrolled ? "70px" : "90px" }}
      >
        <div className="overflow-y-auto h-full p-6">
          {menuItems.map((item, index) => (
            <div key={index} className="mb-4">
              {item.submenu ? (
                <>
                  <div className="text-lg font-semibold text-emerald-700 mb-2">
                    {item.label}
                  </div>
                  <div className="pl-4 space-y-2">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className="block py-2 text-gray-600 hover:text-emerald-600 transition-colors duration-200"
                      >
                        {subItem.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`block py-2 text-lg font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? "text-emerald-700"
                      : "text-gray-700 hover:text-emerald-600"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
