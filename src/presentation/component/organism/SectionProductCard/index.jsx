import ProductCard from "presentation/component/molecule/ProductCard";

const SectionProductCard = (props) => {
  const { title, data } = props;
  return (
    <div className="section-product-card">
      <div className="container">
        <h3 className="section-product-card-title">{title}</h3>
        <div className="section-product-card-list">
          {data.map((val, idx) => (
            <div key={`pc-${idx}`} className="section-product-card-item">
              <ProductCard name={val.name} image={val.image} price={val.price} location={val.location} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionProductCard;