import React from 'react';
import styled from 'styled-components';
import { Experience } from '../components/Experience/Experience';
import { ProfileIcon } from '../components/ProfileIcon/ProfileIcon';
import { Navbar } from '../components/Sidebar/Navbar';
import { Skills } from '../components/Skills/Skills';

const MainContainer = styled.main`
  display: flex;
  height: 100%;
`;

const ResumeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 50px;
  width: 100%;
  gap: 2rem;
`;

export function MainView() {
  return (
    <MainContainer>
      <Navbar />
      <ResumeContainer>
        <ProfileIcon />
        <Skills />
        <Experience />
      </ResumeContainer>
    </MainContainer>
  );
}
