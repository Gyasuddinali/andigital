
import { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../another/pricetable.css"

const PricingTable = () => {
  const [billingCycle, setBillingCycle] = useState("monthly")

  const handleBillingChange = (cycle) => {
    setBillingCycle(cycle)
  }

  return (
    <div className="container my-5">
      {/* Billing Cycle Tabs */}
      <div className="row mb-5 justify-content-center">
        <div className="col-md-6 d-flex">
          <button
            className={`billing-tab ${billingCycle === "monthly" ? "active" : ""}`}
            onClick={() => handleBillingChange("monthly")}
          >
            MONTHLY
          </button>
          <button
            className={`billing-tab ${billingCycle === "quarterly" ? "active" : ""}`}
            onClick={() => handleBillingChange("quarterly")}
          >
            QUARTERLY
          </button>
          <button
            className={`billing-tab ${billingCycle === "annually" ? "active" : ""}`}
            onClick={() => handleBillingChange("annually")}
          >
            ANNUALLY
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="row">
        {/* BASIC PLAN */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card pricing-card h-100">
            <div className="card-body">
              <h3 className="card-title text-uppercase fw-bold">BASIC</h3>
              <h2 className="price text-end">$300</h2>
              <p className="text-muted">Low Budget SEO!</p>

              <div className="scrollable-content">
                <div className="feature-section">
                  <h5 className="feature-title">Keyword Research</h5>
                  <ul className="feature-list">
                    <li>10-15 Keywords</li>
                  </ul>
                </div>

                <div className="feature-section">
                  <h5 className="feature-title">Content</h5>
                  <ul className="feature-list">
                    <li>2 Articles (400 words)</li>
                    <li>1 Blogs (500 words)</li>
                  </ul>
                </div>

                <div className="feature-section">
                  <h5 className="feature-title">Link Building</h5>
                  <ul className="feature-list">
                    <li>5 Submissions</li>
                    <li>5 Classifieds</li>
                    <li>5 Community Participation</li>
                    <li>5 Business Profiles</li>
                  </ul>
                </div>

                <div className="feature-section">
                  <h5 className="feature-title">Website</h5>
                  <ul className="feature-list">
                    <li>Meta Tags Creation</li>
                    <li>Web Content Optimization</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-footer text-center">
              <button className="btn btn-order">Order Now</button>
            </div>
          </div>
        </div>

        {/* ADVANCED PLAN */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card pricing-card h-100">
            <div className="card-body">
              <h3 className="card-title text-uppercase fw-bold">ADVANCED</h3>
              <h2 className="price text-end">$500</h2>
              <p className="text-muted">Great For Startups!</p>

              <div className="scrollable-content">
                <div className="feature-section">
                  <h5 className="feature-title">Keyword Research</h5>
                  <ul className="feature-list">
                    <li>20-25 Keywords</li>
                  </ul>
                </div>

                <div className="feature-section">
                  <h5 className="feature-title">Content</h5>
                  <ul className="feature-list">
                    <li>4 Articles (400 words)</li>
                    <li>2 Blogs (500 words)</li>
                  </ul>
                </div>

                <div className="feature-section">
                  <h5 className="feature-title">Guest Blogs (DA 40 +)</h5>
                  <ul className="feature-list">
                    <li>1 Guest Blogs (1000 words)</li>
                  </ul>
                </div>

                <div className="feature-section">
                  <h5 className="feature-title">Link Building</h5>
                  <ul className="feature-list">
                    <li>10 Submissions</li>
                    <li>10 Classifieds</li>
                    <li>10 Community Participation</li>
                    <li>10 Business Profiles</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-footer text-center">
              <button className="btn btn-order">Order Now</button>
            </div>
          </div>
        </div>

        {/* PRO PLAN */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card pricing-card h-100">
            <div className="card-body">
              <h3 className="card-title text-uppercase fw-bold">PRO</h3>
              <h2 className="price text-end">$750</h2>
              <p className="text-muted">Most Popular Choice!</p>

              <div className="scrollable-content">
                <div className="feature-section">
                  <h5 className="feature-title">Content</h5>
                  <ul className="feature-list">
                    <li>6 Articles (400 words)</li>
                    <li>4 Blogs (500 words)</li>
                    <li>1 Press Releases</li>
                  </ul>
                </div>

                <div className="feature-section">
                  <h5 className="feature-title">Promotional Content</h5>
                  <ul className="feature-list">
                    <li>1 Infographics</li>
                    <li>1 Videos (w/ Voice-over)</li>
                  </ul>
                </div>

                <div className="feature-section">
                  <h5 className="feature-title">Link Building</h5>
                  <ul className="feature-list">
                    <li>15 Submissions</li>
                    <li>15 Classifieds</li>
                    <li>15 Community Participation</li>
                    <li>15 Business Profiles</li>
                  </ul>
                </div>

                <div className="feature-section">
                  <h5 className="feature-title">Website</h5>
                  <ul className="feature-list">
                    <li>Complete Website Optimization</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-footer text-center">
              <button className="btn btn-order">Order Now</button>
            </div>
          </div>
        </div>

        {/* PREMIUM PLAN */}
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card pricing-card h-100">
            <div className="card-body">
              <h3 className="card-title text-uppercase fw-bold">PREMIUM</h3>
              <h2 className="price text-end">$1000</h2>
              <p className="text-muted">For Best Results!</p>

              <div className="scrollable-content">
                <div className="feature-section">
                  <h5 className="feature-title">Keyword Research</h5>
                  <ul className="feature-list">
                    <li>40-45 Keywords</li>
                    <li>Competitor Analysis</li>
                  </ul>
                </div>

                <div className="feature-section">
                  <h5 className="feature-title">Content</h5>
                  <ul className="feature-list">
                    <li>8 Articles (400 words)</li>
                    <li>6 Blogs (500 words)</li>
                    <li>1 Press Releases (Paid)</li>
                  </ul>
                </div>

                <div className="feature-section">
                  <h5 className="feature-title">Guest Blogs (DA 40 +)</h5>
                  <ul className="feature-list">
                    <li>1 Guest Blogs (1000 words)</li>
                  </ul>
                </div>

                <div className="feature-section">
                  <h5 className="feature-title">Promotional Content</h5>
                  <ul className="feature-list">
                    <li>2 Infographics</li>
                    <li>2 Videos (w/ Voice-over)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-footer text-center">
              <button className="btn btn-order">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingTable
