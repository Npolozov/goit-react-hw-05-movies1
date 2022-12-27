import styled from 'styled-components';

export const Item = styled.li`
  background: white;
  border-radius: 4px;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const ImageGalleryItemimage = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const ActorName = styled.p`
  margin: 10px 0 5px 5px;
`;

export const List = styled.ul`
  display: grid;
  padding: 0;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  list-style: none;
`;
