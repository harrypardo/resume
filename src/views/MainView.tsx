import React from 'react';
import styled from 'styled-components';
import { ProfileIcon } from '../components/ProfileIcon/ProfileIcon';
import { Navbar } from '../components/Sidebar/Navbar';

const MainContainer = styled.main`
  display: flex;
  height: 100%;
`;

const ResumeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 50px;
  width: 100%;
`;

export function MainView() {
  return (
    <MainContainer>
      <Navbar />
      <ResumeContainer>
        <ProfileIcon />
        <article>Hello!</article>
        <article>Hello!</article>
      </ResumeContainer>
    </MainContainer>
  );
}
