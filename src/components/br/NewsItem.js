import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  cursor: pointer;
  position: relative;
  .content {
    flex: auto;
    padding: 1em;
    a {
      color: white;
      text-decoration: none;
    }
    p {
      font-size: 1rem;
      padding-top: 1em;
      color: lightgray;
    }
    position: absolute;
    bottom: 0;
  }
  .card-image {
    border-radius: 1rem;
    height: 0;
    padding-bottom: 70%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  .card-image > * {
    position: absolute;
    z-index: 2;
  }
  .card-image:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 1rem;
  }
`;
const NewsItem = ({ article }) => {
  const { title, article_url, image, source } = article;

  const newsClicked = () => {
    window.open(article_url);
  };

  return (
    <NewsItemBlock className="news-item">
      <figure
        className="card-image"
        style={{ backgroundImage: `url(${image})` }}
        onClick={newsClicked}
      >
        <div className="content">
          <div>
            <a
              className="news-desc"
              href={article_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          </div>
          <p>{source.name}</p>
        </div>
      </figure>
    </NewsItemBlock>
  );
};

export default NewsItem;
