import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Footer from "../components/Footer";
import HFirstSection from "../components/HomeComps/HFirstSection";
import HAboutSection from "../components/HomeComps/HAboutSection";
import HLatestRecipesSection from "../components/HomeComps/HLatestRecipesSection";
import HRecipesSection from "../components/HomeComps/HRecipesSection";

const Home = () => {
  useEffect(() => {}, []);
  return (
    <React.Fragment>
      <HFirstSection />
      <Container
        sx={{ pt: 8, pd: 8 }}
        maxWidth="xl"
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-delay="200"
      />
      <HRecipesSection />
      <HAboutSection />
      <HLatestRecipesSection />
      <Footer />
    </React.Fragment>
  );
};
export default Home;
