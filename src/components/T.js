import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const T = () => {
     const bgStyle = {
    background: 'linear-gradient(135deg, rgba(111, 0, 255, 0.99), rgb(26, 24, 24), rgb(0, 0, 0))',
    color: 'white',
    
  };
  return (
    <div className="container-fluid bg-info my-5" style={bgStyle}>
      <h2 className="mb-4 text-center display-5 fw-bold container-fluid text-center text-white mb-4">Digital Marketing Services in Delhi</h2>
      <p className="mb-4 text-center text-white">
        The team of experienced professionals is well-versed in the latest trends and techniques in the digital marketing landscape. Whether you are a startup, small business, or enterprise, they have tailored solutions to meet your specific requirements.
      </p>

      <div className="row">


<div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title fw-semibold text-dark">Search Engine Optimization (SEO)</h5>
              <p className="card-text">
               The team specializes in providing SEO services that boost your website’s visibility on search engines. By optimizing your website’s structure, content, and implementing effective link-building strategies, they ensure higher organic rankings and increased website traffic.
              </p>
              <a href="#" className="card-link">Learn more</a>
            </div>
          </div>
        </div>


        {/* PPC */}
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Pay-Per-Click (PPC)</h5>
              <p className="card-text">
                With expertise in PPC advertising, they create highly targeted campaigns that drive traffic. Through keyword research, strategic ad placement, and optimization, they maximize ROI and generate leads.
              </p>
              <a href="#" className="card-link">Learn more</a>
            </div>
          </div>
        </div>

        {/* Email Marketing */}
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Email Marketing</h5>
              <p className="card-text">
                They help you nurture leads and retain customers through eye-catching email campaigns, improved open rates, and performance tracking.
              </p>
              <a href="#" className="card-link">Learn more</a>
            </div>
          </div>
        </div>

        {/* Content Marketing */}
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Content Marketing</h5>
              <p className="card-text">
                They create engaging content strategies including blog posts, infographics, and videos to attract and retain customers while building brand authority.
              </p>
              <a href="#" className="card-link">Learn more</a>
            </div>
          </div>
        </div>

        {/* Social Media Marketing */}
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Social Media Marketing</h5>
              <p className="card-text">
                They utilize social media platforms to boost your online presence with engaging content, ads, and audience interaction.
              </p>
              <a href="#" className="card-link">Learn more</a>
            </div>
          </div>
        </div>

        {/* CRO */}
        <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Conversion Rate Optimization</h5>
              <p className="card-text">
                By analyzing user behavior, A/B testing, and improving landing pages, they increase your website’s conversion rates.
              </p>
              <a href="#" className="card-link">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default T;
