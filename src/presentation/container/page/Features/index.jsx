// -- core
import React from "react";

// -- components
import Default from "presentation/component/template/Default";
import SectionFeatures from "presentation/component/organism/SectionFeatures";

// Data
import dataFeature from "./dataFeature";

const Features = () => {
  return (
    <Default subscription={false}>
      <SectionFeatures title={dataFeature.title} desc={dataFeature.desc} list={dataFeature.list} />
    </Default>
  );

  
};

export default Features;
