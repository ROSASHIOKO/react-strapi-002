// src/components/ArticleCard.tsx
import React from 'react';

interface ArticleProps {
  title: string;
  description: string;
  imageUrl: string;
  articleLink: string;
}

const ArticleCard: React.FC<ArticleProps> = ({ title, description, imageUrl, articleLink }) => {
  return (
    <div className="article-card">
      <img src={imageUrl} alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={articleLink}>Read more</a>
      </div>
    </div>
  );
};

export default ArticleCard;
