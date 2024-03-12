const LearnMore = (props) => {
  const { children } = props;
  return (
    <a {...props} className="learn-more">
      {children}
    </a>
  );
};

export default LearnMore;
