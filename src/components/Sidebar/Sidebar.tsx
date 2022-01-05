import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 200px;
  padding: 30px;
  border: 0 1px solid;
  box-shadow: 5px 10px #000080;
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
