import React, {  useLayoutEffect, useRef } from "react";
import Footer from "../components/Footer";
import HFirstSection from "../components/HomeComps/HFirstSection";
import HAISection from "../components/HomeComps/HAISection";
import HAboutSection from "../components/HomeComps/HAboutSection";
import HCarosel from "../components/HomeComps/HCarosel";
import { useLocation } from 'react-router-dom';
const Home = () => {
  const location = useLocation();
  const scrollRef = useRef(null);

  useLayoutEffect(() => {
      if (scrollRef.current) {
          scrollRef.current.scrollTo(0, 0);
      }
  }, [location.pathname]);

  return (
    <React.Fragment>
      <HFirstSection />
      <HCarosel />
      <HAISection />
      <HAboutSection />
      <Footer />
    </React.Fragment>
  );
};
export default Home;
