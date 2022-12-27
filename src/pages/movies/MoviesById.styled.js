import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }

  :hover {
    color: white;
    background-color: orangered;
  }
`;

export const NavigationLink = styled(NavLink)`
  display: inline-flex;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  margin-bottom: 10px;

  :hover {
    color: white;
    background-color: orangered;
  }
`;

export const filmList = styled.section`
  display: flex;
`;

export const Paragraf = styled.p`
  font-size: 500;
`;
