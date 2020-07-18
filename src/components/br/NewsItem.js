import React from 'react';
import styled from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
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
    <NewsItemBlock>
      {image && (
        <div className="thumbnail">
          <a href={article_url} target="_blank" rel="noopener noreferrer">
            <img src={image} alt="thumbnail" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={article_url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
