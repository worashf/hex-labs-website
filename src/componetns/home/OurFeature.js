import clientCenteric from "../../assets/images/features/okf-client-centric-development.svg";
import dedicatedTeam from "../../assets/images/features/okf-dedicated-development-team.svg";
import qualityDelivery from "../../assets/images/features/okf-qa.svg";
import suport from "../../assets/images/features/okf-excellent-support.svg";
const OurFeature = () => {
  return (
    <>
      <section className="our-service-wrapper section-padding">
        <div className="container">
          <div className="col-12 col-xl-6  ">
            <div className="section-title ">
              <span className="my-5  text-center">Our Key Features</span>
              <p>
                We Help you Build and Grow Business. Services That We Deliver
                Makes Us Dignified As One of The Top App Development Companies.
              </p>
            </div>
          </div>
        </div>

        <div class="container">
          <div
            class="services-container-wrapper wow fadeInUp section-padding"
            data-wow-delay=".3s"
          >
            <div class="row text-center">
              <div class="col-xl-3 col-md-6 col-12">
                <div class="single-service-info-item">
                  <div class="icon">
                    <img src={clientCenteric} alt="Client centeric" />
                  </div>
                  <h4>
                    <a href="services-details.html">
                      client centeric Development
                    </a>
                  </h4>
                  <p>
                    We craft the client's needs on web, mobile, and desktop to
                    tailor the solutions and enhance growth of the businesses.
                  </p>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 col-12">
                <div class="single-service-info-item">
                  <div class="icon">
                    <img src={qualityDelivery} alt="Quality Devlivery" />
                  </div>
                  <h4>
                    <a href="services-details.html"> Quality Delivery </a>
                  </h4>
                  <p>
                    We believe in delivering quality products to our clients by
                    assuring all their project specifications.
                  </p>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 col-12">
                <div class="single-service-info-item">
                  <div class="icon">
                    <img src={dedicatedTeam} alt="Dedicated Devlopment Team" />
                  </div>
                  <h4>
                    <a href="services-details.html">
                      Dedicated Development Team
                    </a>
                  </h4>
                  <p>Looking For Website Design Services? Browse.</p>
                </div>
              </div>
              <div class="col-xl-3 col-md-6 col-12">
                <div class="single-service-info-item">
                  <div class="icon">
                    <img src={suport} alt="Excellent suport" />
                  </div>
                  <h4>
                    <a href="services-details.html">excellent Support</a>
                  </h4>
                  <p>A software engineer is a person applies.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurFeature;
