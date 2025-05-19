import "../another/cardstarter.css"
import { FaCheck, FaPhone, FaArrowRight } from "react-icons/fa"
const CardForStarter = () => {
 return (
    <div className="container my-5">
      {/* Main Banner */}
      <div className="starter-package-banner">
        <div className="row g-0">
          {/* Left Section */}
          <div className="col-lg-8">
            <div className="banner-content">
              <h1 className="banner-title">Starter Package</h1>
              <p className="included-text">Included:</p>

              <div className="row features-container">
                {/* First Column */}
                <div className="col-md-4">
                  <ul className="feature-list">
                    <li>
                      <FaCheck className="check-icon" /> Keywords Research
                    </li>
                    <li>
                      <FaCheck className="check-icon" /> Meta Tags Creation
                    </li>
                    <li>
                      <FaCheck className="check-icon" /> Keyword Optimization
                    </li>
                    <li>
                      <FaCheck className="check-icon" /> Content Optimization
                    </li>
                    <li>
                      <FaCheck className="check-icon" /> Call To Action
                    </li>
                  </ul>
                </div>

                {/* Second Column */}
                <div className="col-md-4">
                  <ul className="feature-list">
                    <li>
                      <FaCheck className="check-icon" /> Landing page Optimization
                    </li>
                    <li>
                      <FaCheck className="check-icon" /> Image Optimization
                    </li>
                    <li>
                      <FaCheck className="check-icon" /> Site Speed Optimization
                    </li>
                    <li>
                      <FaCheck className="check-icon" /> Mobile Friendly Optimization
                    </li>
                    <li>
                      <FaCheck className="check-icon" /> Anchor Text Optimization
                    </li>
                  </ul>
                </div>

                {/* Third Column */}
                <div className="col-md-4">
                  <ul className="feature-list">
                    <li>
                      <FaCheck className="check-icon" /> SEO Team Recommendation
                    </li>
                    <li>
                      <FaCheck className="check-icon" /> SEO Strategy
                    </li>
                    <li>
                      <FaCheck className="check-icon" /> Completion Report
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Price */}
          <div className="col-lg-4">
            <div className="price-section">
              <div className="price">$199</div>
              <div className="payment-terms">One Time Payment!</div>
              <button className="btn order-btn">
                Order Now <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="contact-options">
        <a href="tel:866-239-2141" className="phone-link">
          <div className="phone-circle">
            <FaPhone />
          </div>
          <span className="phone-number">866-239-2141</span>
        </a>
        <button className="btn chat-btn">Start a Live Chat</button>
      </div> */}
    </div>
  );
};

export default CardForStarter;
