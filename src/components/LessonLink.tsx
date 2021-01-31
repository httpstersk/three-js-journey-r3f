import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'wouter';

interface IProps {
  children: React.ReactNode;
  href: string;
}

const LessonLink: React.FC<IProps> = ({ children, href }) => {
  return <Wrapper href={href}>{children}</Wrapper>;
};

const Wrapper = styled(Link)`
  align-items: center;
  color: #fff;
  display: inline-flex;
  flex-direction: row;
  font-size: 2rem;
  font-weight: 400;
  margin: 1rem;
  text-decoration: none;
`;

export default LessonLink;
