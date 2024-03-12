const Help = (data) => {
  const {image, title, desc} = data;

  return (
    <div className="overview__box">
      <div className="overview__img">
        <img src={image} alt={title} className="overview__img__el" />
      </div>
      <div className="overview__txt">
        <h2 className="overview__title">{title}</h2>
        <p className="overview__desc">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default Help;
