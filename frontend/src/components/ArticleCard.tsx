
const ArticleCard = ({ title, description, imageUrl, articleLink }: any) => {
  return (
    <div className="article-card">
      <img
        src={imageUrl}
        alt={title}
        onError={(e) => e.currentTarget.src = 'default-image-url.jpg'} // Fallback if image fails to load
        style={{ width: '100%', height: 'auto' }}
      />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={articleLink}>Read more</a>
    </div>
  );
};

export default ArticleCard;

