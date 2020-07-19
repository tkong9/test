import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  position: relative;
  margin-top: 2rem;
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
    @media (min-width: 600px) {
      width: calc(100% - 2rem);
    }
  }
`;

const NewsItem = ({ article }) => {
  const {
    provider,
    source,
    title,
    image,
    source_image,
    article_url,
    publish_time,
  } = article;

  return (
    <NewsItemBlock className="news-item">
      <figure
        className="card-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="content">
          <h2>
            <a
              className="news-desc"
              href={article_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          </h2>
          <p>{source}</p>
        </div>
      </figure>
    </NewsItemBlock>
  );
};

export default NewsItem;
