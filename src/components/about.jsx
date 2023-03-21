import styled from 'styled-components';

import { SectionHeader } from '../common/common-styles';

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60ch;
  min-height: 100vh;
  padding: 20px;
  padding-top: calc(var(--header-height) + 40px);
  gap: 40px;
  color: var(--light-90);
`;

const HeaderGroup = styled.hgroup`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  color: var(--gold);
`;

const HeaderText = styled.p`
  font-size: 2rem;
`;

const AboutContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const AboutHeader = styled(SectionHeader)`
  font-size: 2rem;
`;

const AboutTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-left: 5px solid var(--gold);
  padding-left: 10px;
`;

const AboutText = styled.p`
  line-height: 1.3rem;
  font-size: 1.1rem;
`;

const StrongText = styled.strong`
  color: var(--green);
`;

//-------------------------------------------------------------------------------------------------

function About() {
  return (
    <StyledAbout id="about">
      <HeaderGroup>
        <HeaderText>I am</HeaderText>
        <HeaderTitle>Pete Vasiljev</HeaderTitle>
      </HeaderGroup>
      <AboutContent>
        <AboutHeader>About</AboutHeader>
        <AboutTextGroup>
          <AboutText>
            My goal is to become a full-time web developer. My earliest experience with computers
            was in the 90&apos;s as a kid playing DOS games. Eventually, I decided to work towards
            a degree in computer science. My interest in web development began during my final
            semesters where I worked with a couple groups to build full-stack web applications.
          </AboutText>
          <AboutText>
            My focus is on front-end web development, although I have some experience with{' '}
            <StrongText>Flask</StrongText>, <StrongText>MongoDB</StrongText>,{' '}
            <StrongText>Firebase</StrongText>, and <StrongText> MySQL</StrongText>. There is so
            much to learn about web development and I find myself experimenting with different ways
            to build projects. I currently prefer to build my projects using{' '}
            <StrongText>React</StrongText>, <StrongText>Vite</StrongText>, and{' '}
            <StrongText>Styled Components</StrongText>.
          </AboutText>
        </AboutTextGroup>
      </AboutContent>
    </StyledAbout>
  );
}

export default About;
