import statics from "./statist.jpg"
 import "./statist.css"
const StatSection = () => {
   
  const bgStyle = {
    backgroundImage: 'url("./statist.jpg?auto=format&fit=crop&w=1950&q=80")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#fff',
    padding: '80px 0',
    textAlign: 'center',
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '80px 0',
  };

  const statStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
  };

  const labelStyle = {
    fontSize: '1.2rem',
    marginTop: '10px',
  };

  return (
    <div className="bgStyle text-white">
      <div style={overlayStyle}>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 col-6 mb-4">
              <div style={statStyle}>900<span>+</span></div>
              <div style={labelStyle}>Completed Projects</div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div style={statStyle}>15<span>+</span></div>
              <div style={labelStyle}>Years of Experience</div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div style={statStyle}>30<span>+</span></div>
              <div style={labelStyle}>Team Members</div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div style={statStyle}>120<span>+</span></div>
              <div style={labelStyle}>Client Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatSection;
