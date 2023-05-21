import desktopIcon from "../../assets/images/icons/desktop.png";
import mpobileIcon from "../../assets/images/icons/mobile.png";
import uxIcon from "../../assets/images/icons/ux.png";
import qaIcon from "../../assets/images/icons/qa.png";
import consultIcon from "../../assets/images/icons/stock.png";
import ServiceItem from "./ServiceItem";
const services = [
  {
    icon: desktopIcon,
    title: "Web Development",
    description:
      "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
  },
  {
    icon: mpobileIcon,
    title: "Mobile App Development",
    description:
      "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
  },
  {
    icon: uxIcon,
    title: "UI/UX Development",
    description:
      "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
  },
  {
    icon: qaIcon,
    title: "QA & Testing",
    description:
      "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
  },
  {
    icon: consultIcon,
    title: "IT Consultancy",
    description:
      "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
  },
];

const ServiceContainer = () => {
  return (
    <section class="best-services-wrapper section-padding bg-cover service-bg">
      <div class="container">
        <div class="col-12 col-xl-6 offset-xl-3 col-md-8 offset-md-2 text-center">
          <div class="service-section-title">
            <span>Our Services</span>
            <h3>We Offer a Wide Variety of IT Services</h3>
          </div>
        </div>
        <div class="row">
          {services.map((item, index) => (
            <ServiceItem
              key={`service-${index}`}
              serviceIcon={item.icon}
              serviceTitle={item.title}
              serviceDescription={item.description}
            />
          ))}
        </div>
        <div class="col-12 mt-50 text-center">
          <a href="services.html" class="theme-btn">
            All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceContainer;
