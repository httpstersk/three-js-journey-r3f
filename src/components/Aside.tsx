import React from 'react';
import styled from 'styled-components/macro';

interface IProps {
  children: React.ReactNode;
}

const Aside: React.FC<IProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.aside`
  background-color: #202020;
  color: #fff;
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: max(15rem, 20vw);
  z-index: 2;
`;

export default Aside;
