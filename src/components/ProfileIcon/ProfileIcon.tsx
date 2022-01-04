import React from 'react';
import styled from 'styled-components';

const StyledArticle = styled.article`
  grid-column: 1 / span 2;
  border: 1px solid red;
`;

export function ProfileIcon() {
  return <StyledArticle>Profile Pic!</StyledArticle>;
}
