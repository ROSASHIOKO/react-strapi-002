import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ArticlePage: React.FC = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<any>(null);

  useEffect(() => {
    // Fetch article by ID (mock data for now)
    const mockArticle = {
      id: id,
      title: `Article ${id}`,
      content: `This is the content for article ${id}.`,
    };
    setArticle(mockArticle);
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <a href="/">Back to Home</a>
    </div>
  );
};

export default ArticlePage;
