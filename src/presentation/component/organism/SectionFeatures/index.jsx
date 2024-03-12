import React from "react";
import { Fragment } from "react";
// Component
import FeaturesItem from "presentation/component/molecule/FeaturesItem";

const SectionFeatures = (props) => {
  const { title, desc, list } = props;

  return (
    <div className="features">
      <div className="container">
        <div className="features__head">
          <h2 className="features__title">{title}</h2>
          <p className="features__description">{desc}</p>
        </div>
        <div className="features__list">
          {list.map((val, idx) => {
            return (
              <Fragment key={`fi-${idx}`}>
                <FeaturesItem image={val.image} bgImage={val.bgImage} title={val.title} description={val.description} btnTo={val.btnTo} />
              </Fragment>
            );
          })}
          ;
        </div>
      </div>
    </div>
  );
};

export default SectionFeatures;
