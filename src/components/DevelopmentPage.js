// import React from 'react';

// const DevelopmentPage = () => {
//   return (
//     <div className="container">
//       <h1 className="mb-4">Web Development Services</h1>
//       <p>
//         We build modern, responsive, and secure websites using ReactJS, Node.js, and other leading technologies.
//       </p>
//       <ul>
//         <li>Custom Web Applications</li>
//         <li>Responsive UI/UX</li>
//         <li>API Integration</li>
//         <li>Performance Optimization</li>
//       </ul>
//     </div>
//   );
// };

// export default DevelopmentPage;




import React from 'react';

const DevelopmentPage = () => (
  <div className="container my-5">
    <h1 className="mb-4 text-center text-primary">Web Development Services</h1>
    <div className="row g-4">
      <div className="col-md-6">
        <div className="card h-100 shadow">
          <div className="card-body">
            <h5 className="card-title"><i className="bi bi-laptop-code"></i> Modern Web Apps</h5>
            <p className="card-text">
              Build responsive, fast, and secure web applications using React, Node.js, and modern stacks.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card h-100 shadow">
          <div className="card-body">
            <h5 className="card-title"><i className="bi bi-palette"></i> UI/UX Design</h5>
            <p className="card-text">
              Design-first approach ensures engaging user experiences with intuitive interfaces.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card h-100 shadow">
          <div className="card-body">
            <h5 className="card-title"><i className="bi bi-code-square"></i> Clean Code</h5>
            <p className="card-text">
              Maintainable, modular code with performance optimization for long-term scaling.
            </p>
          </div>
        </div>
      </div>

      <div className="col-md-6">
        <div className="card h-100 shadow">
          <div className="card-body">
            <h5 className="card-title"><i className="bi bi-cloud-upload"></i> Deployment & Hosting</h5>
            <p className="card-text">
              Get your product online with our cloud deployment services (Vercel, Netlify, AWS).
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DevelopmentPage;
