import React, { useState, useCallback } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import BrazilNewsPage from './components/br/NewsPage';
import KoreanNewsPage from './components/kr/NewsPage';
import Categories from './components/br/Categories';
import NewsList from './components/kr/NewsList';
import BrNewsList from './components/br/NewsList';

const App = () => {
  const [category, setCategory] = useState('top');
  const onSelect = useCallback((category) => setCategory(category), []);
  // return <Route path="/:category?" component={BrazilNewsPage} />;

  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <BrNewsList category={category} />
    </>
  );
};

export default App;
