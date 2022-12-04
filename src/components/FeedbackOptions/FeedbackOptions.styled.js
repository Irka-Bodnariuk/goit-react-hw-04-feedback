import styled from 'styled-components';

export const ListButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const Button = styled.button`
  width: 70px;
  padding: 6px;
  text-transform: capitalize;
  background-color: #ddedef;
  border-radius: 4px;
  border: none;
  box-shadow: rgb(0 0 0 / 12%) 0px 1px 3px, rgb(0 0 0 / 14%) 0px 1px 1px,
    rgb(0 0 0 / 20%) 0px 2px 1px;
  &:hover,
  &:focus {
    background-color: #c5d3e0;
  }
`;
