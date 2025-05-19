


// import React from "react";
// import "../components/seopage.css";
// import { FiPhone } from "react-icons/fi"; // You can still use react-icons

// function SeoPage() {
//   return (
//     <div className="App">
//       {/* Navbar */}
//       <nav className="navbar navbar-expand-lg bg-white border-bottom py-3">
//         <div className="container">
//           <a className="navbar-brand" href="#home">
//             <img src="/logo.png" alt="360 Searchvertising Logo" height="60" />
//           </a>
//           <div className="ms-auto d-flex align-items-center">
//             <button className="btn btn-info text-white fw-bold me-4 px-4 py-2">
//               Request A Quote
//             </button>
//             <div className="text-end">
//               <div className="text-secondary">Call Now:</div>
//               <div className="phone-number">9199245536</div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Section */}
//       <div className="container mt-5">
//         <div className="row align-items-center">
//           <div className="col-lg-7">
//             <div className="seo-banner py-1 px-3 d-inline-block mb-3">
//               RANK HIGHER, CONVERT MORE WITH DATA-DRIVEN SEO
//             </div>
//             <h1 className="main-heading mb-4">
//               Elite SEO strategies that deliver measurable business growth
//             </h1>

//             <div className="stats-container my-4">
//               <div className="stat-item">
//                 <span className="stat-highlight">84% of clients</span> on page 1 within 90 days
//               </div>
//               <div className="stat-item">
//                 <span className="stat-highlight">3.2x average</span> ROI from our SEO campaigns
//               </div>
//               <div className="stat-item">
//                 <span className="stat-highlight">41% increase</span> in qualified leads for local businesses
//               </div>
//             </div>

//             <div className="pricing-banner d-inline-block mt-3 position-relative">
//               <div className="pricing-text">
//                 <div>SEO Packages From</div>
//                 <div className="no-contracts">No Contracts, Guaranteed Results</div>
//               </div>
//               <div className="price-tag">$300</div>
//             </div>

//             <div className="mt-5">
//               <button className="btn btn-danger me-3 px-4 py-3">Start a Live Chat</button>
//               <button className="btn btn-outline-danger rounded-circle p-3 call-btn">
//                 <FiPhone size={20} />
//               </button>
//               <span className="ms-3 phone-number">9199245536</span>
//             </div>
//           </div>

//           <div className="col-lg-5 mt-5 mt-lg-0">
//             <div className="contact-form-container p-4">
//               <h2 className="text-center mb-4">Ready To Start Your Project?</h2>
//               <form>
//                 <div className="mb-3">
//                   <input type="text" className="form-control" placeholder="Name" />
//                 </div>
//                 <div className="mb-3">
//                   <input type="email" className="form-control" placeholder="Email" />
//                 </div>
//                 <div className="mb-3">
//                   <input type="tel" className="form-control" placeholder="Phone" />
//                 </div>
//                 <div className="mb-3">
//                   <input type="url" className="form-control" placeholder="Website URL" />
//                 </div>
//                 <button type="submit" className="btn btn-danger w-100 py-3 mt-2">
//                   GET MY FREE SEO PLAN
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="rocket-bg"></div>
//     </div>
//   );
// }

// export default SeoPage;











import React from 'react';

const SeoPage = () => (
  <div className="container my-5">
    <h1 className="mb-4 text-center text-success">SEO Services</h1>
    <div className="row g-4">
      <div className="col-md-6">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title"><i className="bi bi-bar-chart-line"></i> On-page SEO</h5>
            <p className="card-text">
              Optimize titles, meta tags, headers, and content to improve rankings and visibility.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title"><i className="bi bi-speedometer"></i> Technical SEO</h5>
            <p className="card-text">
              Boost site speed, fix indexing issues, and use schema markup for better discoverability.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title"><i className="bi bi-key"></i> Keyword Research</h5>
            <p className="card-text">
              Target the right keywords with our SEO tools and competitive analysis strategies.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card h-100 shadow-sm">
          <div className="card-body">
            <h5 className="card-title"><i className="bi bi-graph-up-arrow"></i> SEO Audits</h5>
            <p className="card-text">
              Comprehensive site audits to find and fix SEO bottlenecks for improved traffic.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SeoPage;
