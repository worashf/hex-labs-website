import { Helmet } from "react-helmet-async";
import Headeline from "../componetns/home/Headline";
import OurExperiance from "../componetns/home/Experiance";
import ServiceContainer from "../componetns/service/ServiceContainer";
import OurFeature from "../componetns/home/OurFeature";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Hex Labs</title>
        <meta property="og:image" content="./og.png" title="Hex labs" />
        <meta property="og:title" content="Hex Labs" />
        <meta
          property="og:description"
          content="Hex Labs App Development, web developement, system development, seo, to
          tailor the solutions and enhance growth of the businesses"
        />
      </Helmet>
      <Headeline />
      <OurFeature />
      <OurExperiance />
      <ServiceContainer />
    </>
  );
};

export default Home;
