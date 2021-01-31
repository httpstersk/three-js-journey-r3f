import React from 'react';
import styled from 'styled-components/macro';

interface IProps {
  children: React.ReactNode;
}

const Navigation: React.FC<IProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.nav`
  display: grid;
  gap: 1rem;
`;

export default Navigation;
