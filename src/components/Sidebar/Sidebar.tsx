import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  padding: 30px;
  border: 1px solid red;
  height: 100%;
  min-width: fit-content;
`;

export function Sidebar() {
  return <Container>This is a sidebar</Container>;
  // Profile Icon Link
  // Contact Link
  // Skills
  // Exp
  // Resume
}
