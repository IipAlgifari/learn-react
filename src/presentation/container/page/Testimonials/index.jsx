import React from "react";

// Components
import Header from "presentation/component/organism/Header";
import SectionTestimonials from "presentation/component/organism/SectionTestimonials";
import Footer from "presentation/component/organism/Footer";
import SectionLatihan from "presentation/component/organism/SectionLatihan";


const Testimonials = () => {
  return (
    <>
      <Header />
      <SectionTestimonials />
      <SectionLatihan/>
      <Footer />
    </>
  );
};

export default Testimonials;
