
const ProductCard = (props) => {
  const { name, image, price, location } = props;
  return (
    <div className="product-card">
      <div className="product-card-img">
        <img src={image} alt={name} />
      </div>
      <div className="product-card-text">
        <h4 className="product-card-name">{name}</h4>
        <p className="product-card-price">{price}</p>
        <p className="product-card-location">{location}</p>
      </div>
    </div>
  );
};

export default ProductCard;
