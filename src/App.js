import React, { useState, useCallback } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import BrazilNewsPage from './components/br/NewsPage';
import KoreanNewsPage from './components/kr/NewsPage';
import Categories from './components/kr/Categories';
import NewsList from './components/kr/NewsList';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);
  // return <Route path="/:category?" component={BrazilNewsPage} />;
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;
