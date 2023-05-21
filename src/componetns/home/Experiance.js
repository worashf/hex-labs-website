import aboutImage from "../../assets/images/hex-labs-about.jpg";

const OurExperiance = () => {
  return (
    <section class="about-wrapper section-padding-1">
      <div class="container">
        <div class="row align-center">
          <div class="col-lg-6 col-12">
            <div class="about-img-funfact-content me-xl-3">
              <img src={aboutImage} class="img-round" alt="" />

              <div class="fun-fact-bar wow fadeInDown">
                <div class="year-img">
                  <h3>25</h3>
                  <img src="assets/img/icons/award.png" alt="" />
                </div>
                <p>Years Of Experience</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12 mt-5 mt-lg-0 ps-xl-5">
            <div class="section-title">
              <span>About Our Company</span>
              <h2>
                Your Partner for <br />
                Software Innovation
              </h2>
              <p>
                Quantech is the partner of choice for many of the world’s
                leading enterprises, SMEs and technology challengers. We help
                businesses elevate their value through custom software
                development, product design.
              </p>
            </div>
            <ul class="checked-list mt-1">
              <li>Which means as the company ramps.</li>
              <li>Available in all versions.</li>
              <li>The potential loss of the touch bar.</li>
              <li>High - Speed USB.</li>
            </ul>
            <a href="about.html" class="theme-btn mt-30">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExperiance;
