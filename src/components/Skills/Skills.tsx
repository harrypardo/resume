import React from 'react';
import styled from 'styled-components';

const StyledArticle = styled.article`
  padding: 20px;
  border: 10px solid white;

  font-family: RobotoMono, serif;
`;

const Title = styled.span`
  font-size: 48px;
  color: gold;
`;

const StyledList = styled.ul`
  list-style-type: none;

  > li {
    float: left;
    margin: 5px;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 22px;
`;

export function Skills() {
  const buildList = (items: string[]) => (
    <StyledList>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </StyledList>
  );

  return (
    <StyledArticle>
      <Title>SKILLS</Title>
      <Content>
        <article>
          <h3>Programming</h3>
          {buildList(['Javascript', 'Typescript', 'CSS', 'REST', 'Python', 'NodeJS', 'NoSQL', 'MySQL'])}
        </article>
        <article>
          <h3>Development Tools</h3>
          {buildList(['Eclipse', 'Git/Github', 'Yarn', 'NPM', 'Bash'])}
        </article>
        <article>
          <h3>Cloud</h3>
          {buildList(['AWS'])}
        </article>
        <article>
          <h3> Software Engineering</h3>
          {buildList(['Object-Oriented Programming', 'Agile', 'Scrum'])}
        </article>
        <article>
          <h3>Soft Skills</h3>
          {buildList(['Team Player', 'Fast Learner', 'Critical Thinking', 'Speaking-Up'])}
        </article>
      </Content>
    </StyledArticle>
  );
}
