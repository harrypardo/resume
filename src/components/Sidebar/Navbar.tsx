import React from 'react';
import styled from 'styled-components';
import { CgMenu, CgFacebook } from 'react-icons/cg';
import { AiFillGithub } from 'react-icons/ai';
import { Sidebar } from './Sidebar';
import useComponentVisible from '../../custom-hooks/useComponentVisible';

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 20px;
  border: 1px solid;
  box-shadow: 2px 5px #000080;
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

export function Navbar() {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible();
  const onClickNavIcon = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  return (
    <>
      <NavContainer>
        <NavIcon onClick={onClickNavIcon} />
        <a href="https://www.facebook.com/harrypardo108/" target="_blank" rel="noreferrer">
          <FacebookIcon />
        </a>
        <a href="https://github.com/harrypardo/resume" target="_blank" rel="noreferrer">
          <GithubIcon />
        </a>
      </NavContainer>
      {isComponentVisible && (
        <div ref={ref}>
          <Sidebar />
        </div>
      )}
    </>
  );
}
