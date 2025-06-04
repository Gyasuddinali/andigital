
import { useState } from "react"

 

import {
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaSnapchat,
  FaTumblr,
  FaPinterest,
  FaPhone,
} from "react-icons/fa"
import { SiNetlify } from "react-icons/si"
import { FaWhatsapp } from "react-icons/fa"
import "../App.css"
import NavBar from "./NavBar"
import AllPage from "./AllPage";
function Master() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Here you would typically send the data to a server
    alert("Form submitted successfully!")
    setFormData({ name: "", number: "", email: "", message: "" })
  }

  return (
    <div className="app">
        {/* <NavBar/> */}
      <header>
        <div className="top-bar">
          <div className="container">
            <div className="contact-info">
              <a href="tel:+919199245536">+919199245536</a>
              <span className="divider">|</span>
              <a href="mailto:enquiry@amtechdigital.com">enquiry@amtechdigital.com</a>
            </div>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Snapchat">
                <FaSnapchat />
              </a>
              <a href="#" aria-label="Netlify">
                <SiNetlify />
              </a>
              <a href="#" aria-label="Tumblr">
                <FaTumblr />
              </a>
              <a href="#" aria-label="Pinterest">
                <FaPinterest />
              </a>
            </div>
          </div>
        </div>
        <nav className="main-nav">
          <div className="container">
            <div className="logo">
              <a href="/">
                <h1>AMTECH DISITAL SOLUTION</h1>
                <p>DIGITAL MARKETING & SEO SERVICES

                </p>
              </a>
            </div>
          


<NavBar></NavBar>

          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h2>AMTECH DIGITAL SOLUTION</h2>
              <h1>Digital Marketing Course In Delhi, India</h1>
              <div className="course-features">
                <p>
                  50+ Modules | Work on Live Projects | 100% Job Placement | 15+ Certifications | 3-6 Months Training
                  Program | Easy EMI Options | 8yrs+ Trainer Experience | Agency Style Learning | AI
                </p>
              </div>
            </div>
            <div className="enrollment-form">
              <h3>Your Query in Our Digital Service</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  placeholder="Your Number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email Id"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <textarea
                  placeholder="Comment or Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>


       

      </main>

      <div className="floating-buttons">
        <a href="tel:+919199245536" className="call-btn">
          <FaPhone /> Call Us +919199245536
        </a>
        <a href="https://wa.me/9199245536" className="whatsapp-btn">
          <FaWhatsapp /> Hi, I want to know more about the course.
        </a>
      </div>
{/* <AllPage></AllPage> */}


  </div>
  )
}

export default Master
