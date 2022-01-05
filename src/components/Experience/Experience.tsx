import React from 'react';
import styled from 'styled-components';

const StyledArticle = styled.article`
  padding: 20px;
  border: 10px solid white;

  font-family: RobotoMono, serif;
`;

const Title = styled.span`
  font-size: 32px;
  color: gold;
`;

export function Experience() {
  return (
    <StyledArticle>
      <Title>EXPERIENCE</Title>
    </StyledArticle>
  );
}
