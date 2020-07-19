import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../../lib/usePromise';

const NewsListBlock = styled.div`
  /* width: 1000px; */
  /* margin: 0 auto; */
`;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'top' ? 'top' : `${category}`;
    const newsURL = `http://bridge-news-cdn-dev.internet.apps.samsung.com/qap/br/${query}.json`;
    return axios.get(newsURL);
  }, [category]);

  // 대기중일 때
  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  // 아직 response 값이 설정되지 않았을 때
  if (!response) {
    return null;
  }

  // 에러가 발생했을 때
  if (error) {
    return <NewsListBlock>에러 발생!</NewsListBlock>;
  }

  // response 값이 유효할 때
  const articles = response.data;
  return (
    <NewsListBlock className="news-list">
      {articles.map((article) => (
        <NewsItem key={article.article_url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
