import { useParams, Link } from "react-router-dom";

function ServiceDetails() {
  const { id } = useParams();

  const services = [
    {
      id: 1,
      name: "Web Development",
      description: "We create responsive websites for businesses.",
      price: "Rs. 15,000",
    },
    {
      id: 2,
      name: "Graphic Design",
      description: "We create logos, social media posts and branding designs.",
      price: "Rs. 5,000",
    },
    {
      id: 3,
      name: "App Development",
      description: "We develop mobile applications for different needs.",
      price: "Rs. 20,000",
    },
    {
      id: 4,
      name: "SEO Services",
      description:
        "We help websites improve their visibility on search engines.",
      price: "Rs. 8,000",
    },
  ];

  const service = services.find((item) => item.id === Number(id));

  if (!service) {
    return (
      <div className="container text-center py-5">
        <h2>Service Not Found!</h2>
        <Link to="/services" className="btn btn-dark mt-3">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="details-card mx-auto text-center">
        <h2>{service.name}</h2>

        <p>{service.description}</p>

        <h5>Price: {service.price}</h5>

        <Link to="/services" className="btn btn-dark mt-3">
          Back to Services
        </Link>
      </div>
    </div>
  );
}

export default ServiceDetails;
