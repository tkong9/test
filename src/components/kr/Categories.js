import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
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
const Categories = ({ onSelect }) => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          activeClassName="active"
          exact={c.name === 'all'}
          to={c.name === 'all' ? '/' : `/${c.name}`}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
