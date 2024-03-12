import QuoteCard from "presentation/component/molecule/QuoteCard";

const SectionQuoteCard = (props) => {
  const { title, data } = props;
  return (
    <div className="section-quote-card">
      <div className="container">
        <h3 className="section-quote-card-title">{title}</h3>
        <div className="section-quote-card-list">
          {data.map((val, idx) => (
            <div key={`qc-${idx}`} className="section-quote-card-item">
              <QuoteCard description={val.quote} name={val.author} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionQuoteCard;