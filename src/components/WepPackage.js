const WepPackage = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center text-white mb-3">Pricing</h2>
      <h1 className="text-center text-white fw-bold mb-4">Affordable pricing, stunning results</h1>
      <p className="text-center text-white mb-5">
        Enjoy top-notch quality with our premium services, all at competitive rates that offer exceptional value for your investment.
      </p>

      <div className="row g-4 text-center">
        {/* Startup Package */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h4 className="card-title">Startup Package</h4>
              <p className="text-muted">Ideal for startups</p>
              <h3 className="fw-bold">₹5000</h3>
              <p className="text-muted">Per Month</p>
              <ul className="list-unstyled">
                <li>Template-based website design</li>
                <li>Up to 4 website pages</li>
                <li>Website content writing with AI</li>
                <li>Basic SEO optimization</li>
                <li>Monthly website updates</li>
                <li>Social Media integration</li>
              </ul>
              <button className="btn btn-primary mt-3">Order Now</button>
              <p className="text-success mt-2">10% discount when paid yearly</p>
            </div>
          </div>
        </div>

        {/* Pro Package */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-primary">
            <div className="card-body">
              <h4 className="card-title">Pro Package <span className="badge bg-primary ms-2">Popular</span></h4>
              <p className="text-muted">Great for growing businesses</p>
              <h3 className="fw-bold">₹10000</h3>
              <p className="text-muted">Per Month</p>
              <ul className="list-unstyled">
                <li>Startup Package +</li>
                <li>Custom website design</li>
                <li>Up to 6 website pages</li>
                <li>Email Marketing setup</li>
                <li>Advanced SEO optimization</li>
                <li>Bi-weekly website updates</li>
              </ul>
              <button className="btn btn-primary mt-3">Order Now</button>
              <p className="text-success mt-2">15% discount when paid yearly</p>
            </div>
          </div>
        </div>

        {/* Elite Package */}
        <div className="col-md-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h4 className="card-title">Elite Package</h4>
              <p className="text-muted">Best for large businesses</p>
              <h3 className="fw-bold">₹15000</h3>
              <p className="text-muted">Per Month</p>
              <ul className="list-unstyled">
                <li>Pro Package +</li>
                <li>Dedicated project manager</li>
                <li>Up to 8 website pages</li>
                <li>Expert website content writing</li>
                <li>Standard CRM integration</li>
                <li>Weekly website updates</li>
              </ul>
              <button className="btn btn-primary mt-3">Order Now</button>
              <p className="text-success mt-2">20% discount when paid yearly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WepPackage;
