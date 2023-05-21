import { Slide } from "react-slideshow-image";
import slide1 from "../../assets/images/headline/mobile-app-development.jpeg";
import slide2 from "../../assets/images/headline/mobile-app-development.jpeg";

import "react-slideshow-image/dist/styles.css";
import "./headline.module.css";

const Headeline = () => {
  const slides = [
    {
      url: slide1,

      caption: "Web Development",
      description:
        "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
      btn: "Get In Touch",
    },
    {
      url: slide2,

      caption: "App Development",
      description:
        "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
      btn: "Get In Touch",
    },
    {
      url: slide2,

      caption: "IT Consultancy",
      description:
        "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
      btn: "Get In Touch",
    },
  ];

  return (
    <section className="slide-container hero-wrapper hero-1 text-center text-md-start">
      <Slide>
        {slides.map((slideShow, index) => (
          <div className="each-slide" key={index}>
            <div className="container">
              <div className="row">
                <div className="col-12 col-xxl-8 col-lg-9 col-sm-10 d-flex align-items-center">
                  <div className="hero-contents pe-lg-3">
                    <h2>{slideShow.caption}</h2>
                    <p>{slideShow.description}</p>
                    <a
                      href="contact.html"
                      data-animation-in="fadeInRight"
                      data-delay-in="0.9"
                      className="theme-btn me-sm-4 mt-4 animated"
                    >
                      {slideShow.btn}
                    </a>
                  </div>
                  <div>
                    <img
                      src={slideShow.url}
                      className="headline-image "
                      alt="hero-slide-show"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </section>
  );
};
export default Headeline;
