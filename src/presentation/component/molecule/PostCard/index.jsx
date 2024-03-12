const PostCard = (props) => {
  const { title, description } = props;

  return (
    <div className="post-card">
      <h3 className="post-card-title">{title}</h3>
      <p className="post-card-desc">{description}</p>
    </div>
  );
};

export default PostCard;
