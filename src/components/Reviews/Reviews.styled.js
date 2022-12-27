import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  padding: 0;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  list-style: none;
`;

export const TitleText = styled.h2`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.38;
  letter-spacing: 0.02em;
`;

export const ParagrafText = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 1.38;
  letter-spacing: 0.02em;
`;
