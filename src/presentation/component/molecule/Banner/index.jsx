import LearnMore from "presentation/component/atom/LearnMore";

const BannerItem = (props) => {
  const { title, description, img, btnTo } = props;

  return (
    <div className="hero-banner__item">
      <div className="container">
        <div className="hero-banner__wrapper">
          <div className="hero-banner__img">
            <img src={img} alt={title} className="hero-banner__img__el" />
          </div>
          <div className="hero-banner__txt">
            <h2 className="hero-banner__title">{title}</h2>
            <p className="hero-banner__desc">{description}</p>
            <div className="hero-banner__btn">
                <LearnMore variant="primary" href={btnTo}>Learn More</LearnMore>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
