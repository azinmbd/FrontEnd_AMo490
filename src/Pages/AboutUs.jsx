import React, {  useLayoutEffect, useRef} from "react";
import { useLocation } from 'react-router-dom';
import Footer from "../components/Footer";
import AboutUsIntro from "../components/AboutUsComps/AboutUsIntro";
import TeamSection from "../components/AboutUsComps/TeamSection";
import ProposedSection from "../components/AboutUsComps/ProposedSection";
import TechSection from "../components/AboutUsComps/TechSection";
export default function AboutUs() {
  
  const location = useLocation();
  const scrollRef = useRef(null);

  useLayoutEffect(() => {
      if (scrollRef.current) {
          scrollRef.current.scrollTo(0, 0);
      }
  }, [location.pathname]);
  return (
    <React.Fragment>
      <AboutUsIntro />
      <TeamSection />
      <ProposedSection />
      <TechSection />
      <Footer />
    </React.Fragment>
  );
}
