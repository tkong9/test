import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const categories = [
  {
    name: 'all',
    text: 'All',
  },
  {
    name: 'business',
    text: 'Business',
  },
  {
    name: 'entertainment',
    text: 'Entertainment',
  },
  {
    name: 'health',
    text: 'Health',
  },
  {
    name: 'science',
    text: 'Science',
  },
  {
    name: 'sports',
    text: 'Sports',
  },
  {
    name: 'technology',
    text: 'Technology',
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

const Category = styled.div`
  flex-grow: 1;
  text-align: center;
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

  ${(props) =>
    props.active &&
    css`
      border: 2px solid black;
      font-weight: 600;
      color: black;
      &:hover {
        color: black;
        font-weight: bold;
      }
    `}
`;

const Categories = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {' '}
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
