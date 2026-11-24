import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      id: 1,
      name: "Web Development",
      description: "We create responsive and user-friendly websites.",
      price: "Rs. 15,000",
    },
    {
      id: 2,
      name: "Graphic Design",
      description: "We create attractive designs for businesses.",
      price: "Rs. 5,000",
    },
    {
      id: 3,
      name: "App Development",
      description: "We develop useful mobile applications.",
      price: "Rs. 20,000",
    },
    {
      id: 4,
      name: "SEO Services",
      description: "We help websites improve their search ranking.",
      price: "Rs. 8,000",
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-2">Our Services</h2>
      <p className="text-center text-muted mb-4">
        Take a look at the services we offer.
      </p>

      <div className="row">
        {services.map((service) => (
          <div className="col-md-6 col-lg-3 mb-4" key={service.id}>
            <div className="card h-100 p-3">
              <h5>{service.name}</h5>

              <p>{service.description}</p>

              <p className="fw-bold">{service.price}</p>

              <Link
                to={`/services/${service.id}`}
                className="btn btn-dark mt-auto"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
