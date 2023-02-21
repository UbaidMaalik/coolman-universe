import React, { Fragment } from "react";
import Banner from "../components/banner/Banner";
import Faqs from "../components/faq/Faqs";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import RoadMap from "../components/roadmap/RoadMap";
import SpeshStory from "../components/spesh/SpeshStory";
import Team from "../components/team/Team";
import TermsCondition from "../components/terms/TermsCondition";
import World from "../components/world/World";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <div className="spesh">
        <SpeshStory />
      </div>
      <World />
      <RoadMap />
      <Faqs />
      <Team />
      <TermsCondition />
      <Footer />
    </Fragment>
  );
};

export default Home;
