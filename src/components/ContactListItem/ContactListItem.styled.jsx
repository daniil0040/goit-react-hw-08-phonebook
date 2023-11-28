import styled from 'styled-components';

export const Contact = styled.li`
  display: flex;
  gap: 15px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
export const PhoneLink = styled.a`
  &:hover,
  &:focus {
    color: #008b8b;
  }
`;
