// -- core
import React, { Fragment } from "react";

// -- component
import BannerItem from "presentation/component/molecule/Banner";

// -- dataBanner
import DataBanner from "./dataBanner";

// -- react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SectionBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="hero-banner">
      <div className="container">
        <div className="hero-banner__list">
          <Slider {...settings}>
            {DataBanner.map((val, idx) => {
              return (
                <Fragment key={`fi-${idx}`}>
                  <BannerItem image={val.image} title={val.title} description={val.description} btnTo={val.btnTo} />
                </Fragment>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
