import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Thank you! We will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact-section py-5 bg-light" id="contact">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Get in Touch</h2>
          <p className="text-muted">Have a project in mind? We'd love to hear from you.</p>
        </div>

        <div className="row mb-5">
          <div className="col-md-6 mb-4">
            <h4 className="fw-bold mb-3">Contact Information</h4>
            <p><strong>Address:</strong> Address: 422, Gali Number 1, Village Chhalera, Chhalera, Block D, Sector 44, Noida, Uttar Pradesh 201301</p>
            <p><strong>Email:</strong> amdigital@gmail.com</p>
            <p><strong>Phone:</strong> 9199245536</p>
            <p><strong>Working Hours:</strong> 24 Hours</p>
          </div>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="gyasuddin"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="gyasu@gmail.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Let's talk about your project"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message here..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="row">
          <div className="col-12">
            <h4 className="fw-bold mb-3 text-center">Our Location</h4>
            <div className="map-responsive" style={{ borderRadius: '8px', overflow: 'hidden' }}>
              <iframe
                title="Google Map"
                src='https://www.google.com/maps?sca_esv=360d606574466e04&rlz=1C1CHBF_enIN1138IN1138&sxsrf=ADLYWIK3SePSuNGD6qPGudhbsHmXKtgGMQ:1733489270493&kgmid=/g/11w37dm8hb&shndl=30&shem=uaasie&kgs=d1e3b0eca8f63148&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KaPQI7vR5Qw5MbhpbnEL26hZ&daddr=422,+Gali+Number+1,+Village+Chhalera,+Chhalera,+Block+D,+Sector+44,+Noida,+Uttar+Pradesh+201301'
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
