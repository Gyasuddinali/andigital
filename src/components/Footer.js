


import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router

const Footer = () => {
  return (
    <footer style={styles.footer} role="contentinfo">
      <div style={styles.container}>
        {/* Branding */}
        <div style={styles.section}>
          <h2 style={styles.heading}>AMTECH DIGITAL</h2>
          <p>Your partner in web development and search engine optimization.</p>
        </div>

        {/* Navigation */}
        <div style={styles.section}>
          <h3>Quick Links</h3>
          <ul style={styles.list}>
            <li><Link to="/services" style={styles.link}>Services</Link></li>
            <li><Link to="/portfolio" style={styles.link}>Portfolio</Link></li>
            <li><Link to="/blog" style={styles.link}>Blog</Link></li>
            <li><Link to="/contact" style={styles.link}>Contact</Link></li>
          </ul>
        </div>


        {/* Contact */}
        <div style={styles.section}>
          <h3>Contact Us</h3>
          <p>Address: 422, Gali Number 1, Village Chhalera, Chhalera, Block D, Sector 44, Noida, Uttar Pradesh 201301</p>
           <p>Hours:24hours</p>


          <p>Email: <a href="mailto:info@devseo.com" style={styles.link}>enquiry@amtechdigital.com</a></p>
          <p>Phone: <a href="tel:+1234567890" style={styles.link}>+9182076 92087</a></p>
        </div>
      </div>

      <div style={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} AMTECH DIGITAL. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#222',
    color: '#fff',
    padding: '40px 20px',
    marginTop: '50px',
    fontFamily: 'Arial, sans-serif'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  section: {
    flex: '1 1 200px',
    margin: '10px'
  },
  heading: {
    fontSize: '24px',
    marginBottom: '10px'
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  link: {
    color: '#4FC3F7',
    textDecoration: 'none'
  },
  input: {
    padding: '8px',
    width: '70%',
    borderRadius: '4px',
    border: 'none',
    marginRight: '5px'
  },
  button: {
    padding: '8px 12px',
    backgroundColor: '#4FC3F7',
    border: 'none',
    borderRadius: '4px',
    color: '#000',
    cursor: 'pointer'
  },
  bottom: {
    borderTop: '1px solid #444',
    marginTop: '20px',
    paddingTop: '20px',
    textAlign: 'center'
  }
};

export default Footer;
