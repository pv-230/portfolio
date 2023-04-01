import { forwardRef } from 'react';
import styled from 'styled-components';

import { SectionHeader } from '../common/common-styles';

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  max-width: var(--content-max-width);
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
  background-image: ${({ vertical, halfLeft, halfRight }) =>
    `linear-gradient(to ${vertical ? 'bottom' : 'right'}, ${
      halfLeft
        ? 'hsl(0, 0%, 50%), hsl(0, 0%, 25%)'
        : `${
            halfRight
              ? 'hsl(0, 0%, 25%) 50%, hsl(0, 0%, 50%)'
              : 'hsl(0, 0%, 50%), hsl(0, 0%, 25%) 50%, hsl(0, 0%, 50%)'
          }`
    })`};
  animation: ${({ delay, vertical }) =>
    `0.25s linear ${delay}s both ${vertical ? 'stretch-height' : 'stretch-width'}`};
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
  justify-self: ${({ justify }) => justify};

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
  grid-template-columns: 2px 1fr 1fr 2px;
  grid-template-rows: 2px 1fr 2px;
`;

const AboutContent = styled.section`
  grid-column: 2 / 4;
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  animation: 0.75s 2.25s forwards darken-bg;

  @keyframes darken-bg {
    from {
      background-color: initial;
    }

    to {
      background-color: var(--dark-5);
    }
  }
`;

const AboutHeader = styled(SectionHeader)`
  font-size: 2.2rem;
  opacity: 0%;
  animation: 0.75s 2.25s forwards fadein;
`;

const AboutText = styled.p`
  line-height: clamp(1.2rem, 3vw, 1.6rem);
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  opacity: 0%;

  &:nth-of-type(1) {
    animation: 0.75s 2.5s forwards fadein;
  }

  &:nth-of-type(2) {
    animation: 0.75s 2.75s forwards fadein;
  }
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
      <Line gridColumn="1 / 5" gridRow="1 / 2" delay={1.5} justify="center" />
      <Line vertical gridColumn="1 / 2" gridRow="1 / 4" delay={1.75} />
      <Line vertical gridColumn="4 / 5" gridRow="1 / 4" delay={1.75} />
      <Line gridColumn="1 / 3" gridRow="3 / 4" delay={2} halfLeft />
      <Line gridColumn="3 / 5" gridRow="3 / 4" delay={2} justify="end" halfRight />
      <AboutContent>
        <AboutHeader>About</AboutHeader>
        <AboutText>
          My goal is to become a full-time web developer. My earliest experience with computers was
          in the 90&apos;s as a kid playing DOS games. Eventually, I decided to pursue a degree in
          computer science. My interest in web development began during my final semesters where I
          worked with a couple groups to build full-stack web applications.
        </AboutText>
        <AboutText>
          My focus is on front-end web development, although I have some experience with{' '}
          <StrongText>Flask</StrongText>, <StrongText>MongoDB</StrongText>,{' '}
          <StrongText>Firebase</StrongText>, and <StrongText> MySQL</StrongText>. There is so much
          to learn about web development and I find myself experimenting with different ways to
          build projects. I currently prefer to build my projects using{' '}
          <StrongText>React</StrongText>, <StrongText>Vite</StrongText>, and{' '}
          <StrongText>Styled Components</StrongText>.
        </AboutText>
      </AboutContent>
    </AboutGrid>
  </StyledAbout>
));

export default About;
