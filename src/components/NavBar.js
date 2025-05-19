import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const navItems = [
    {
      id: "seo",
      title: "SEO",
      path: "/seopage",
      dropdown: [
        { label: "On-Page SEO", path: "/seo/on-page" },
        { label: "Off-Page SEO", path: "/seo/off-page" },
        { label: "Technical SEO", path: "/seo/technical" },
        { label: "Local SEO", path: "/seo/local" },
      ],
    },
    {
      id: "smo",
      title: "SMO",
      dropdown: [
        { label: "Facebook Marketing", path: "/smo/facebook" },
        { label: "Instagram Marketing", path: "/smo/instagram" },
        { label: "Twitter Marketing", path: "/smo/twitter" },
        { label: "LinkedIn Marketing", path: "/smo/linkedin" },
      ],
    },
    {
      id: "services",
      title: "SERVICES",
      dropdown: [
        { label: "SEO Services", path: "/services/seo" },
        { label: "Web Development", path: "/services/web-development" },
        { label: "Content Marketing", path: "/services/content-marketing" },
        { label: "PPC Management", path: "/services/ppc" },
      ],
    },
    {
      id: "blog",
      title: "BLOG",
      dropdown: [],
      path: "/blog",
    },
    {
      id: "development",
      title: "DEVELOPEMENT",
      dropdown: [],
      path: "/development",
    },
    {
      id: "contact",
      title: "CONTACT US",
      dropdown: [],
      path: "/contactus",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <div className={`hamburger ${mobileMenuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div className={`nav-links ${mobileMenuOpen ? "active" : ""}`} ref={dropdownRef}>
          {navItems.map((item) => (
            <div
              className="nav-item"
              key={item.id}
              onMouseEnter={() => setActiveDropdown(item.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {/* {item.dropdown.length > 0 ? (
                <div className={`nav-link ${activeDropdown === item.id ? "active" : ""}`}>
                  {item.title}
                  <span className="dropdown-arrow">▼</span>
                </div>
              ) : (
                <Link to={item.path} className="nav-link">
                  {item.title}
                </Link>
              )} */}



{item.dropdown.length > 0 ? (
  <Link to={item.path || "#"} className={`nav-link ${activeDropdown === item.id ? "active" : ""}`}>
    {item.title}
    <span className="dropdown-arrow">▼</span>
  </Link>
) : (
  <Link to={item.path} className="nav-link">
    {item.title}
  </Link>
)}


              

              {item.dropdown.length > 0 && (
                <div className={`dropdown-menu ${activeDropdown === item.id ? "active" : ""}`}>
                  {item.dropdown.map((subItem, index) => (
                    <Link to={subItem.path} key={index} className="dropdown-item">
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;









