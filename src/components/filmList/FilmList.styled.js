import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const ListSection = styled.section`
padding-bottom: 50px;
`

export const Item = styled.li`
  background: white;
  border-radius: 4px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
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
`;
