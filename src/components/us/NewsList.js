import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../../lib/usePromise';

const NewsListBlock = styled.div``;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'all' ? '' : `&category=${category}`;
    return axios.get(
      `https://newsapi.org/v2/top-headlines?country=us${query}&apiKey=A384e22774024150b910eb0325bc9371`,
    );
  }, [category]);

  // 대기중일 때
  if (loading) {
    return <NewsListBlock>Loading...</NewsListBlock>;
  }
  // 아직 response 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }

  // 에러가 발생했을 때
  if (error) {
    return <NewsListBlock>Error...!</NewsListBlock>;
  }

  // response 값이 유효할 때
  const { articles } = response.data;
  return (
    <NewsListBlock className="news-list">
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
