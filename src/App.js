import React from 'react';
import { Route } from 'react-router-dom';
import BrazilNewsPage from './components/br/NewsPage';

const App = () => {
  //return <Route path="/:category?" component={KoreanNewsPage} />;
  return <Route path="/:category?" component={BrazilNewsPage} />;
};

export default App;
