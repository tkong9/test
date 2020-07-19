import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  margin-top: 2rem;
  .content {
    flex: auto;
    background: white;
    padding: 1em;
    border-radius: 0 0 1rem 1rem;
    a {
      color: black;
      text-decoration: none;
    }
    p {
      font-size: 11px;
      padding-top: 1em;
    }
  }
  .card-image {
    border-radius: 1rem 1rem 0 0;
    height: 0;
    padding-bottom: 60%;
    background: lightgrey;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
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
      ></figure>

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
    </NewsItemBlock>
  );
};

export default NewsItem;
