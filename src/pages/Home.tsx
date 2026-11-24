import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="home-section text-center mb-5">
        <h1 className="display-5 fw-bold">Welcome to Hamayal Services</h1>

        <p className="lead text-muted mx-auto" >
          We create simple, clean websites and digital solutions that help your
          business stand out online without the tech headache.
        </p>

        <div className="mt-4">
          <Link to="/services" className="btn btn-dark">
            Explore Services
          </Link>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="row text-center mt-5 pt-4 border-top">
        <div className="col-md-4 mb-3">
          <h5>Simple & Clean</h5>
          <p className="text-muted small">
            Thoughtful designs that are easy for your customers to use.
          </p>
        </div>
        <div className="col-md-4 mb-3">
          <h5>Made for You</h5>
          <p className="text-muted small">
            Tailored around your exact goals, timeline, and budget.
          </p>
        </div>
        <div className="col-md-4 mb-3">
          <h5>Always Here</h5>
          <p className="text-muted small">
            Reliable support whenever you need updates or advice.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;