
// import "../components/seopage.css"
// import { Container, Row, Col, Form, Button, Navbar } from "react-bootstrap"


// function SeoPage(){
//   return (
//     <div className="App">
//       <Navbar bg="white" expand="lg" className="py-3 border-bottom">
//         <Container>
//           <Navbar.Brand href="#home">
//             <img src="/logo.png" alt="360 Searchvertising Logo" height="60" className="d-inline-block align-top" />
//           </Navbar.Brand>
//           <div className="d-flex align-items-center ms-auto">
//             <Button variant="info" className="me-4 text-white fw-bold px-4 py-2">
//               Request A Quote
//             </Button>
//             <div className="text-end">
//               <div className="text-secondary">Call Now:</div>
//               <div className="phone-number">866-239-2141</div>
//             </div>
//           </div>
//         </Container>
//       </Navbar>

//       <Container className="mt-5">
//         <Row className="align-items-center">
//           <Col lg={7}>
//             <div className="seo-banner py-1 px-3 d-inline-block mb-3">
//               RANK HIGHER, CONVERT MORE WITH DATA-DRIVEN SEO
//             </div>
//             <h1 className="main-heading mb-4">Elite SEO strategies that deliver measurable business growth</h1>

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
//               <Button variant="danger" className="me-3 px-4 py-3">
//                 Start a Live Chat
//               </Button>
//               <Button variant="outline-danger" className="rounded-circle p-3 call-btn">
//                 <faPhone size={24} />
//               </Button>
//               <span className="ms-3 phone-number">866-239-2141</span>
//             </div>
//           </Col>

//           <Col lg={5} className="mt-5 mt-lg-0">
//             <div className="contact-form-container p-4">
//               <h2 className="text-center mb-4">Ready To Start Your Project?</h2>
//               <Form>
//                 <Form.Group className="mb-3">
//                   <Form.Control type="text" placeholder="Name" />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Control type="email" placeholder="Email" />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Control type="tel" placeholder="Phone" />
//                 </Form.Group>

//                 <Form.Group className="mb-3">
//                   <Form.Control type="url" placeholder="Website URL" />
//                 </Form.Group>

//                 <Button variant="danger" className="w-100 py-3 mt-2">
//                   GET MY FREE SEO PLAN
//                 </Button>
//               </Form>
//             </div>
//           </Col>
//         </Row>
//       </Container>

//       <div className="rocket-bg"></div>
//     </div>
//   )
// }

// export default SeoPage
















import React from "react";
import "../components/seopage.css";
import { FiPhone } from "react-icons/fi"; // You can still use react-icons

function SeoPage() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white border-bottom py-3">
        <div className="container">
          <a className="navbar-brand" href="#home">
            <img src="/logo.png" alt="360 Searchvertising Logo" height="60" />
          </a>
          <div className="ms-auto d-flex align-items-center">
            <button className="btn btn-info text-white fw-bold me-4 px-4 py-2">
              Request A Quote
            </button>
            <div className="text-end">
              <div className="text-secondary">Call Now:</div>
              <div className="phone-number">9199245536</div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="seo-banner py-1 px-3 d-inline-block mb-3">
              RANK HIGHER, CONVERT MORE WITH DATA-DRIVEN SEO
            </div>
            <h1 className="main-heading mb-4">
              Elite SEO strategies that deliver measurable business growth
            </h1>

            <div className="stats-container my-4">
              <div className="stat-item">
                <span className="stat-highlight">84% of clients</span> on page 1 within 90 days
              </div>
              <div className="stat-item">
                <span className="stat-highlight">3.2x average</span> ROI from our SEO campaigns
              </div>
              <div className="stat-item">
                <span className="stat-highlight">41% increase</span> in qualified leads for local businesses
              </div>
            </div>

            <div className="pricing-banner d-inline-block mt-3 position-relative">
              <div className="pricing-text">
                <div>SEO Packages From</div>
                <div className="no-contracts">No Contracts, Guaranteed Results</div>
              </div>
              <div className="price-tag">$300</div>
            </div>

            <div className="mt-5">
              <button className="btn btn-danger me-3 px-4 py-3">Start a Live Chat</button>
              <button className="btn btn-outline-danger rounded-circle p-3 call-btn">
                <FiPhone size={20} />
              </button>
              <span className="ms-3 phone-number">9199245536</span>
            </div>
          </div>

          <div className="col-lg-5 mt-5 mt-lg-0">
            <div className="contact-form-container p-4">
              <h2 className="text-center mb-4">Ready To Start Your Project?</h2>
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control" placeholder="Name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="mb-3">
                  <input type="tel" className="form-control" placeholder="Phone" />
                </div>
                <div className="mb-3">
                  <input type="url" className="form-control" placeholder="Website URL" />
                </div>
                <button type="submit" className="btn btn-danger w-100 py-3 mt-2">
                  GET MY FREE SEO PLAN
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="rocket-bg"></div>
    </div>
  );
}

export default SeoPage;


