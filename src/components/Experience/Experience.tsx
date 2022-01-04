import React from 'react';
import styled from 'styled-components';

const StyledArticle = styled.article`
  border: 1px solid;
  padding: 20px;
`;

const Title = styled.span`
  font-size: 32px;
  font-family: Against, serif;
`;

export function Experience() {
  return (
    <StyledArticle>
      <Title>Experience</Title>
    </StyledArticle>
  );
}
