import React from 'react';
import styled from 'styled-components';

const StyledArticle = styled.article`
  border: 1px solid;
  padding: 20px;
  background-color: #36454f;
  border: 10px solid #eec643;
  border-radius: 5px;

  font-family: Roboto, serif;
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
