import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListSection = styled.section`
  padding-bottom: 50px;
`;

export const Item = styled.li`
  width: 100%;
  border-radius: 5px;
  transition-property: box-shadow, transform;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover,
  &:focus {
    cursor: pointer;
    transform: scale(1.03);
    box-shadow: 0 0 20px -1px orange;
  }
`;

export const ImageGalleryItemimage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const FilmName = styled.p`
  margin: 10px 0 5px 5px;
`;

export const Link = styled(NavLink)`
  color: black;
  text-decoration: none;
`;

export const List = styled.ul`
  display: grid;
  padding: 0;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  list-style: none;
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
