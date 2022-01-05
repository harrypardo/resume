import React from 'react';
import styled from 'styled-components';
import { CgMenu, CgFacebook } from 'react-icons/cg';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Sidebar } from './Sidebar';
import useComponentVisible from '../../custom-hooks/useComponentVisible';

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 20px;
`;

const NavIcon = styled(CgMenu)`
  width: 100%;
  height: 30px;
  cursor: pointer;
`;

const FacebookIcon = styled(CgFacebook)`
  width: 100%;
  height: 30px;
`;

const GithubIcon = styled(AiFillGithub)`
  width: 100%;
  height: 30px;
`;

const LinkedinIcon = styled(AiFillLinkedin)`
  width: 100%;
  height: 30px;
`;

const StyledLink = styled.a`
  color: inherit;
  text-decoration: none;
`;

export function Navbar() {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible();
  const onClickNavIcon = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  return (
    <>
      <NavContainer>
        <NavIcon onClick={onClickNavIcon} />
        <StyledLink href="https://www.facebook.com/harrypardo108/" target="_blank" rel="noreferrer">
          <FacebookIcon />
        </StyledLink>
        <StyledLink href="https://github.com/harrypardo/resume" target="_blank" rel="noreferrer">
          <GithubIcon />
        </StyledLink>

        <StyledLink href="https://www.linkedin.com/in/harry-pardo-296b63121/" target="_blank" rel="noreferrer">
          <LinkedinIcon />
        </StyledLink>
      </NavContainer>
      {isComponentVisible && (
        <div ref={ref}>
          <Sidebar />
        </div>
      )}
    </>
  );
}
