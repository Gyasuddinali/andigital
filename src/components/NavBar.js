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
      id: "contact",
      title: "CONTACT US",
      dropdown: [],
      path: "/contact",
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
              {item.dropdown.length > 0 ? (
                <div className={`nav-link ${activeDropdown === item.id ? "active" : ""}`}>
                  {item.title}
                  <span className="dropdown-arrow">▼</span>
                </div>
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











// import { useState, useEffect, useRef } from "react"
// import "./Navbar.css"

// const NavBar = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null)
//   const dropdownRef = useRef(null)

//   const navItems = [
//     {
//       id: "seo",
//       title: "SEO",
//       dropdown: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Local SEO"],
//     },
//     {
//       id: "smo",
//       title: "SMO",
//       dropdown: ["Facebook Marketing", "Instagram Marketing", "Twitter Marketing", "LinkedIn Marketing"],
//     },
//     {
//       id: "services",
//       title: "SERVICES",
//       dropdown: ["SEO Services", "Web Development", "Content Marketing", "PPC Management"],
//     },
//     {
//       id: "blog",
//       title: "BLOG",
//       dropdown: [],
//     },
//     {
//       id: "contact",
//       title: "CONTACT US",
//       dropdown: [],
//     },
//   ]

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setActiveDropdown(null)
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside)
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside)
//     }
//   }, [])

//   // Mobile menu state
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen)
//     setActiveDropdown(null)
//   }

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Mobile menu button */}
//         <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
//           <div className={`hamburger ${mobileMenuOpen ? "active" : ""}`}>
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </div>

//         {/* Navigation links */}
//         <div className={`nav-links ${mobileMenuOpen ? "active" : ""}`} ref={dropdownRef}>
//           {navItems.map((item) => (
//             <div
//               className="nav-item"
//               key={item.id}
//               onMouseEnter={() => setActiveDropdown(item.id)}
//               onMouseLeave={() => setActiveDropdown(null)}
//             >
//               <div className={`nav-link ${activeDropdown === item.id ? "active" : ""}`}>
//                 {item.title}
//                 {item.dropdown.length > 0 && <span className="dropdown-arrow">▼</span>}
//               </div>

//               {item.dropdown.length > 0 && (
//                 <div className={`dropdown-menu ${activeDropdown === item.id ? "active" : ""}`}>
//                   {item.dropdown.map((subItem, index) => (
//                     <a
//                       href={`#${subItem.toLowerCase().replace(/\s+/g, "-")}`}
//                       key={index}
//                       className="dropdown-item"
//                     >
//                       {subItem}
//                     </a>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default NavBar
