import React from 'react';
import styled from 'styled-components/macro';

interface IProps {
  children: React.ReactNode;
}

const Aside: React.FC<IProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.aside`
  --padding: 2rem;
  background-color: transparent;
  color: #fff;
  display: flex;
  flex: 1;
  height: calc(100vh - 2 * var(--margin) * 1px);
  left: 0;
  padding: var(--padding);
  position: absolute;
  top: 0;
  width: max(15rem, 25vw);
  z-index: 2;
`;

export default Aside;
