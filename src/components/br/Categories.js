import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  {
    name: 'top',
    display: 'TOP',
  },
  {
    name: 'news',
    display: 'NEWS',
  },
  {
    name: 'business',
    display: 'BUSINESS',
  },
  {
    name: 'politics',
    display: 'POLITICS',
  },
  {
    name: 'sports',
    display: 'SPORTS',
  },
  {
    name: 'lifestyle',
    display: 'LIFESTYLE',
  },
  {
    name: 'entertainment',
    display: 'ENTERTAINMENT',
  },
  {
    name: 'health',
    display: 'HEALTH',
  },
];

const CategoriesBlock = styled.div`
  z-index: 10;
  padding: 0.5rem;
  overflow-x: scroll;
  display: flex;
  position: sticky;
  color: grey;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  justify-content: start;
  padding: 1rem;
  margin: 0 auto;
  width: 100%;
  overflow-x: auto;
  @media (min-width: 480px) {
    max-width: 760px;
  }
  @media (min-width: 960px) {
    max-width: 1400px;
  }
`;
const Category = styled(NavLink)`
  flex-grow: 1;
  color: grey;
  text-align: center;
  font-size: 1rem;
  padding: 0.5rem;
  font-weight: 400;
  cursor: pointer; /* white-space: pre; */
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #495057;
  }
  &.active {
    border: 1px solid #0c0c0c;
    font-weight: 700;
    color: black;
    border-radius: 2rem;
    &:hover {
      font-weight: bold;
    }
  }
`;

const Categories = () => {
  return (
    <CategoriesBlock className="category">
      {categories.map((c) => (
        <Category
          key={c.name}
          activeClassName="active"
          exact={c.name === 'top'}
          to={c.name === 'top' ? '/' : `/${c.name}`}
        >
          {c.display}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
