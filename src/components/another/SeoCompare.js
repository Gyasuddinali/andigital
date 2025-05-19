import React from 'react';

const SeoCompare = () => {
  return (
    <div className="comtainer mt-5">
      <div className="row">
                          <h3 className="card-title text-danger text-center">Why Most SEOs Fail</h3>

        {/* Card 1 - Why Most SEOs Fail */}
        <div className="col-md-6 mb-4">

          <div className="card h-100 shadow-sm border-danger">
            <div className="card-body">
              <ul className="list-unstyled">
                <li>🔴 Generic strategies that ignore your specific business needs</li>
                <li>🔴 Focus on rankings instead of revenue</li>
                <li>🔴 No clear ROI tracking</li>
                <li>🔴 One-size-fits-all approach without industry specialization</li>
                <li>🔴 Mysterious "black box" processes with no transparency</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Card 2 - 360 Searchvertising Difference */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm border-success">
            <div className="card-body">
              <h5 className="card-title text-success">AMDIGITAL Difference</h5>
              <ul className="list-unstyled">
                <li>✅ Data-driven campaigns tailored to your goals</li>
                <li>✅ Focus on leads and sales, not just rankings</li>
                <li>✅ Transparent reporting with clear ROI metrics</li>
                <li>✅ Industry-specific strategies customized to your market</li>
                <li>✅ Dedicated SEO specialist assigned to your account</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SeoCompare;
