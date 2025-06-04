
import { serviceData } from './serviceData'; 
const ServiceCard = () => {
     const bgStyle = {
    background: 'linear-gradient(135deg, rgba(111, 0, 255, 0.99), rgb(26, 24, 24), rgb(0, 0, 0))',
    color: 'white',
    
  };

  return (
    <div className="container-fluid p-5 my-5 bg-warning" style={bgStyle}>
      <h1 className=" fw-bold text-center text-primary">Our Service</h1>
      <div className="row g-4">
        {serviceData.map((service, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card h-100 shadow">
              <div className="card-header text-white" style={{ backgroundColor: service.color }}>
                <div className="d-flex align-items-center">
                  <img
                    src={service.icon}
                    alt={service.title}
                    style={{ width: '30px', height: '30px', marginRight: '10px' }}
                  />
                  <h5 className="mb-0">{service.title}</h5>
                </div>
              </div>
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  {service.features.map((feature, i) => (
                    <li key={i} className="mb-2">
                      ✅ {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;


