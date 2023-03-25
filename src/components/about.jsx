import { forwardRef } from 'react';
import styled from 'styled-components';

import { SectionHeader } from '../common/common-styles';

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
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

const HeaderText = styled.p`
  font-size: 2rem;
  opacity: 0%;
  animation: 0.75s forwards fadein;
`;

const HeaderTitle = styled.h1`
  font-size: 2.75rem;
  color: var(--gold);
  opacity: 0%;
  animation: 0.75s 0.75s forwards fadein;
`;

const Line = styled.div`
  width: ${({ vertical }) => (vertical ? '2px' : '0px')};
  height: ${({ vertical }) => (vertical ? '0px' : '2px')};
  background-image: ${({ vertical }) =>
    `linear-gradient(to ${
      vertical ? 'bottom' : 'right'
    }, hsl(0, 0%, 50%), hsl(0, 0%, 25%) 50%, hsl(0, 0%, 50%))`};
  animation: 0.25s linear forwards;
  animation-delay: ${({ delay }) => `${delay}s`};
  animation-name: ${({ vertical }) => (vertical ? 'stretch-height' : 'stretch-width')};
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};

  @keyframes stretch-width {
    from {
      width: 0px;
    }

    to {
      width: 100%;
    }
  }

  @keyframes stretch-height {
    from {
      height: 0px;
    }

    to {
      height: 100%;
    }
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 2px 1fr 2px;
  grid-template-rows: 2px 1fr 2px;
`;

const AboutContent = styled.section`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`;

const AboutHeader = styled(SectionHeader)`
  font-size: 2rem;
  opacity: 0%;
  animation: 0.75s 1.5s forwards fadein;
`;

const AboutTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: 0%;
  animation: 0.75s 2s forwards fadein;
`;

const AboutText = styled.p`
  line-height: 1.3rem;
  font-size: 1.1rem;
`;

const StrongText = styled.strong`
  color: var(--green);
`;

//-------------------------------------------------------------------------------------------------

const About = forwardRef((props, ref) => (
  <StyledAbout id="about" ref={ref}>
    <HeaderGroup>
      <HeaderText>I am</HeaderText>
      <HeaderTitle>Pete Vasiljev</HeaderTitle>
    </HeaderGroup>
    <AboutGrid>
      <Line gridColumn="1 / 4" gridRow="1 / 2" delay={1.5} />
      <Line vertical gridColumn="1 / 2" gridRow="1 / 4" delay={1.5} />
      <Line gridColumn="1 / 4" gridRow="3 / 4" delay={1.75} />
      <Line vertical gridColumn="3 / 4" gridRow="1 / 4" delay={1.75} />
      <AboutContent>
        <AboutHeader>About</AboutHeader>
        <AboutTextGroup>
          <AboutText>
            My goal is to become a full-time web developer. My earliest experience with computers
            was in the 90&apos;s as a kid playing DOS games. Eventually, I decided to pursue a
            degree in computer science. My interest in web development began during my final
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
    </AboutGrid>
  </StyledAbout>
));

export default About;
