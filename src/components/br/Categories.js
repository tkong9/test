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
  display: flex;
  position: sticky;
  color: grey;
  top: 0;
  background: white;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled(NavLink)`
  color: grey;
  font-size: 1.125rem;
  border-radius: 1.5rem;
  padding: 0.5rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  &:hover {
    color: #495057;
  }

  &.active {
    border: 2px solid black;
    font-weight: 600;
    color: black;
    &:hover {
      font-weight: bold;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <CategoriesBlock>
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
