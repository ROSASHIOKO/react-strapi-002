import React, { useEffect, useState } from 'react';
import ArticleCard from '../components/ArticleCard';

const Home: React.FC = () => {
  const [articles, setArticles] = useState<any[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://timely-respect-7660f107ae.strapiapp.com/api/articles');
        const data = await response.json();
        console.log('Full API Response:', data);

        if (data?.data?.length > 0) {
          const formattedArticles = data.data.map((article: any, index: number) => {
            let imageUrl = '';
            switch (index) {
              case 0:
                imageUrl = 'https://timely-respect-7660f107ae.media.strapiapp.com/simon_B_1832592e6b.PNG';
                break;
              case 1:
                imageUrl = 'https://timely-respect-7660f107ae.media.strapiapp.com/iphone15pro_94ffb780cd.PNG';
                break;
              case 2:
                imageUrl = 'https://timely-respect-7660f107ae.media.strapiapp.com/fifa2018_e9e766b852.PNG';
                break;
              default:
                imageUrl = 'https://timely-respect-7660f107ae.media.strapiapp.com/simon_B_1832592e6b.PNG';
                break;
            }

            let description = 'No Description';
            if (article.Content && article.Content.length > 0) {
              const firstContent = article.Content[0]?.children?.[0]?.text;
              if (firstContent) {
                description = firstContent;
              }
            }

            return {
              id: article.id,
              title: article.Title,
              description: description,
              imageUrl: imageUrl,
              articleLink: `/article/${article.id}`,
            };
          });

          setArticles(formattedArticles);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>

      <header className="header">
        <h1> News Website</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Latest Articles</h1>
        <div className="articles-container">
          {articles.length > 0 ? (
            articles.map((article: any) => (
              <ArticleCard
                key={article.id}
                title={article.title}
                description={article.description}
                imageUrl={article.imageUrl}
                articleLink={article.articleLink}
              />
            ))
          ) : (
            <p>No articles found.</p>
          )}
        </div>

  
        <section className="about-us">
          <h2>About Us</h2>
          <p>
            We are a team dedicated to delivering the latest and most relevant news, articles, and insights
            on various topics. Our goal is to keep you informed and up-to-date with high-quality content.
          </p>
        </section>

  
        <section className="contact-info">
          <h2>Contact Us</h2>
          <p>If you have any questions or inquiries, feel free to reach out to us:</p>
          <ul>
            <li>Email: <a href="mailto:info@example.com">info@example.com</a></li>
            <li>Phone: +1234567890</li>
            <li>Address: 1234 Street Name, City, Country</li>
          </ul>
        </section>
      </main>

      
      <footer className="footer">
        <p>&copy; 2025 News Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;



















