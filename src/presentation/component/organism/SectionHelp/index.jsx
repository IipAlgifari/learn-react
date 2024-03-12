import React from "react";
// Component
import Help from "presentation/component/molecule/Help";
import dataOverview from "presentation/container/page/Help/dataOverview";

const SectionHelp = () => {
  return (
    <div className="overview" id="help">
      <div className="container">
        <Help image={dataOverview.image} title={dataOverview.title} desc={dataOverview.desc}/>
      </div>
    </div>
  );
};

export default SectionHelp;
