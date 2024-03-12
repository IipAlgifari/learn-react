const TestimonialsItem = (props) => {
  const { name, image, price, location } = props;
  return (
    <div className="testimonials__item">
      <div className="testimonials__box">
        <div className="testimonials__head"></div>
        <div className="testimonials__body">
          <div className="testimonials__avatar">
            <img src="assets/img/" alt="" className="testimonials__avatar__el" />
          </div>
          <div className="testimonial__txt"></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsItem;
