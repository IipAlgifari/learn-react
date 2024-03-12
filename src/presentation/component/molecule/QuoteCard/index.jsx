const QuoteCard = (props) => {
    const { description, name } = props;
    return (
      <div className="quote-card">
        <p className="quote-card-text">{description}</p>
        <h6 className="quote-card-name">{name}</h6>
      </div>
    );
  };
  
  export default QuoteCard;
  