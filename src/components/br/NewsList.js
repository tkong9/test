import React from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';
import usePromise from '../../lib/usePromise';

const NewsListBlock = styled.div``;

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const query = category === 'top' ? 'top' : `${category}`;
    return axios.get(
      `http://bridge-news-cdn-dev.internet.apps.samsung.com/qap/br/${query}.json`,
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
  const { data } = response;
  return (
    <NewsListBlock className="news-list">
      {data.map((article) => (
        <NewsItem key={article.article_url} article={article} />
      ))}
    </NewsListBlock>
  );
};

export default NewsList;
