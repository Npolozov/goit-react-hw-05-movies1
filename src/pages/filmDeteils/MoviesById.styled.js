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

export const FilmsDeteils = styled.section`
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 20px;
`;

export const LinkList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const AdditionalSection = styled.section`
  padding: 30px 0 30px 0;
`;

export const TitleText = styled.h2`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.38;
  letter-spacing: 0.02em;
`;

export const ParagrafText = styled.p`
  margin-top: 10px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.38;
  letter-spacing: 0.02em;
`;

export const SpanText = styled.span`
  margin-top: 10px;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.38;
  letter-spacing: 0.02em;
  margin-left: 5px;
`;

export const ImageFilms = styled.img`
  height: 500px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  :not([disabled]):hover {
    color: white;
    background-color: orangered;
  }
`;
