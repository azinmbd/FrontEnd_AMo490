import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Footer from "../components/Footer";
import HFirstSection from "../components/HomeComps/HFirstSection";
import { useDispatch } from "react-redux";
import AboutUsIntro from "../components/AboutUsComps/AboutUsIntro";
import TeamSection from "../components/AboutUsComps/TeamSection";
import ProposedSection from "../components/AboutUsComps/ProposedSection";
import TechSection from "../components/AboutUsComps/TechSection";
export default function AboutUs() {
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
