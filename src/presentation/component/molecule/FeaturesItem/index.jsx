import React from "react";
//  -- Component
import LearnMore from "presentation/component/atom/LearnMore";

const FeaturesItem = (props) => {
  const { image, bgImage, title, description, btnTo } = props;

  return (
    <div className="features__item">
      <div className="features__rectangle" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="features__img">
          <img src={image} alt={title} className="features__img__el" />
        </div>
        <div className="features__txt">
          <h3 className="features__txt__title">{title}</h3>
          <p className="features__txt__desc">{description}</p>
          <div className="features__btn">
            <LearnMore href={btnTo}>Learn More</LearnMore>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesItem;
