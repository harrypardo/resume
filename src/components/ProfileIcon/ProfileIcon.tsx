import React from 'react';
import styled from 'styled-components';

import ProfilePic from '../../assets/pictures/grad pic.jpg';

const StyledArticle = styled.article`
  grid-column: 1 / span 2;
  border: 1px solid;

  display: flex;
  gap: 4rem;
  padding: 20px;
`;

const StyledAbout = styled.div`
  width: 100%;
  font-size: 16px;
`;

const Title = styled.span`
  font-size: 32px;
  font-family: Against, serif;
`;

export function ProfileIcon() {
  return (
    <StyledArticle>
      <img src={ProfilePic} alt="Profile" width="300" height="300" />
      <StyledAbout>
        <Title>About me</Title>
        <p> Hi I&apos;m Harry Pardo. </p>
      </StyledAbout>
    </StyledArticle>
  );
}
