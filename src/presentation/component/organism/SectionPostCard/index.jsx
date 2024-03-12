import PostCard from "presentation/component/molecule/PostCard";

const SectionPostCard = (props) => {
  const { title, data } = props;

  return (
    <div className="section-post-card">
      <div className="container">
        <h3 className="section-post-card-title">{title}</h3>
        <div className="section-post-card-list">
          {data.map((val, idx) => (
            <div key={`psc-${idx}`} className="section-post-card-item">
              <PostCard description={val.body} title={val.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionPostCard;