import styled from 'styled-components';

import {
  SectionContainer,
  StyledSection,
  SectionHeader,
  ParagraphContainer,
  StyledParagraph,
  SubheadingTitle,
  SubheadingText,
} from '../common/common-styles';

const StrongText = styled.strong`
  color: var(--color-green);
  font-weight: 500;
`;

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding: 20px;
  background-color: var(--color-neutral-10);
  border-radius: 5px;
`;

const SkillsHeaderGroup = styled.hgroup`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const SkillsList = styled.ul``;

//-------------------------------------------------------------------------------------------------

function About() {
  return (
    <SectionContainer>
      <StyledSection>
        <SectionHeader>About</SectionHeader>
        <ParagraphContainer>
          <StyledParagraph>
            My goal is to become a full-time web developer. My earliest experience with computers
            was in the 90&apos;s as a kid playing DOS games. Eventually, I decided to pursue a
            degree in computer science. My interest in web development began during my final
            semesters where I worked with a couple groups to build full-stack web applications.
          </StyledParagraph>
          <StyledParagraph>
            My focus is on front-end web development, although I have some experience with{' '}
            <StrongText>Flask</StrongText>, <StrongText>MongoDB</StrongText>,{' '}
            <StrongText>Firebase</StrongText>, and <StrongText> MySQL</StrongText>. There is so
            much to learn about web development and I find myself experimenting with different ways
            to build projects. I currently prefer to build my projects using{' '}
            <StrongText>React</StrongText>, <StrongText>Vite</StrongText>, and{' '}
            <StrongText>Styled Components</StrongText>.
          </StyledParagraph>
        </ParagraphContainer>
        <Skills>
          <SkillsHeaderGroup>
            <SubheadingTitle>Skills</SubheadingTitle>
            <SubheadingText>Here are some things I have worked with before</SubheadingText>
          </SkillsHeaderGroup>
          <SkillsList />
        </Skills>
      </StyledSection>
    </SectionContainer>
  );
}

export default About;
