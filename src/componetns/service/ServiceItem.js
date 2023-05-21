const ServiceItem = ({ serviceIcon, serviceTitle, serviceDescription }) => {
  return (
    <div className="col-xl-4 col-md-6 col-12">
      <div className="single-service-top-icon wow fadeInUp">
        <div className="icon">
          <img src={serviceIcon} alt={serviceTitle} />
        </div>
        <div className="content">
          <h4>
            <a href="services-details.html">{serviceTitle}</a>
          </h4>
          <p>{serviceDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
