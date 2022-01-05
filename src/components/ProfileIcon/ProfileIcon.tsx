import React from 'react';
import styled from 'styled-components';

import { GiViolin, GiConsoleController, GiPhotoCamera } from 'react-icons/gi';
import ProfilePic from '../../assets/pictures/grad pic.jpg';

const StyledArticle = styled.article`
  grid-column: 1 / span 2;

  display: flex;
  gap: 4rem;
  padding: 20px;
  background-color: #36454f;
  border: 10px solid #eec643;
  border-radius: 5px;
  font-family: Roboto, serif;
`;

const StyledAbout = styled.div`
  width: 100%;
  font-size: 16px;

  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled.span`
  font-size: 48px;
  color: gold;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  > svg {
    height: 70px;
    width: 70px;
  }
`;

export function ProfileIcon() {
  return (
    <StyledArticle>
      <img src={ProfilePic} alt="Profile" width="500" height="500" />
      <StyledAbout>
        <Title>Harry Pardo</Title>
        <p>
          {' '}
          Hi I&apos;m a React front end engineer. My core skills include React, CSS, Typescript, Java and a little bit
          of NodeJS. I am currently working as a Front end engineer at Samsung Research and Development.
        </p>

        <article>
          <p>
            <b>Age: </b>23
          </p>
          <p>
            <b>Phone: </b>09175751083
          </p>
          <p>
            <b>Email:</b> harrypardo@outlook.ph
          </p>
        </article>

        <article>
          <h2>Hobbies</h2>
          <IconContainer>
            <GiViolin />
            <GiPhotoCamera />
            <GiConsoleController />
          </IconContainer>
        </article>
      </StyledAbout>
    </StyledArticle>
  );
}
