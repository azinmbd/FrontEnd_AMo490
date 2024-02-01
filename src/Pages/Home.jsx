import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Footer from "../components/Footer";
import HFirstSection from "../components/HomeComps/HFirstSection";
import { useDispatch } from "react-redux";
import HAboutSection from "../components/HomeComps/HAboutSection";
import HLatestRecipesSection from "../components/HomeComps/HLatestRecipesSection";
import HRecipesSection from "../components/HomeComps/HRecipesSection";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
  }, [dispatch]);
  return (
    <React.Fragment>
      <HFirstSection />
      <Container
        sx={{ pt: 8 , pd:8}}
        maxWidth="xl"
        data-aos="fade-down"
        data-aos-duration="2000"
        data-aos-delay="200"
      >

      </Container>
      <HRecipesSection/>
      <HAboutSection />
      <HLatestRecipesSection/>
      <Footer />
    </React.Fragment>
  );
};
export default Home;
