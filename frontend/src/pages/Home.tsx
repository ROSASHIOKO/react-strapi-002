// src/pages/Home.tsx
import React, { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';

const Home: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    // Fetch news articles (replace with actual API call)
    fetch('https://api.example.com/news')
      .then(response => response.json())
      .then(data => setArticles(data.articles)); // Assuming the API returns an array of articles
  }, []);

  return (
    <div className="home">
      <h1>Latest News</h1>
      <div className="article-list">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            description={article.description}
            imageUrl={article.imageUrl}
            articleLink={`/article/${article.id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
