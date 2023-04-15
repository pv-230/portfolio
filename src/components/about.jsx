import { forwardRef } from 'react';
import styled from 'styled-components';

import { SectionHeader } from '../common/common-styles';

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--dark-bg-color);
  animation: 0.75s linear 2.25s forwards reveal;

  @keyframes reveal {
    to {
      background-color: transparent;
    }
  }
`;

const HeroFade = styled.div`
  height: 10vh;
  background-image: linear-gradient(transparent, var(--dark-bg-color));
`;

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: var(--content-max-width);
  padding: 20px;
  padding-top: calc(var(--header-height) + 40px);
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
  text-align: center;
  color: var(--gold-font-color);
  opacity: 0%;
  animation: 0.75s 0.75s forwards fadein;
`;

const Line = styled.div`
  width: ${({ vertical }) => (vertical ? '2px' : '0px')};
  height: ${({ vertical }) => (vertical ? '0px' : '2px')};
  background-image: ${({ vertical, halfLeft, halfRight }) =>
    `linear-gradient(to ${vertical ? 'bottom' : 'right'}, ${
      halfLeft
        ? 'var(--gray-border-color), var(--halfgray-border-color)'
        : `${
            halfRight
              ? 'var(--halfgray-border-color), hsl(0, 0%, 50%)'
              : 'var(--gray-border-color), var(--halfgray-border-color), var(--gray-border-color)'
          }`
    })`};
  animation: ${({ delay, vertical }) =>
    `0.25s linear ${delay}s both ${vertical ? 'stretch-height' : 'stretch-width'}`};
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
  justify-self: ${({ justify }) => justify};

  @keyframes stretch-width {
    to {
      width: 100%;
    }
  }

  @keyframes stretch-height {
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

const AboutSection = styled.section`
  grid-column: 2 / 4;
  grid-row: 2 / 3;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  animation: 0.75s linear 2.25s forwards darken-bg;

  @keyframes darken-bg {
    to {
      background-color: var(--darker-bg-color-alpha);
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
  color: var(--green-font-color);
`;

//-------------------------------------------------------------------------------------------------

const About = forwardRef((props, ref) => (
  <>
    <Hero>
      <AboutWrapper id="about" ref={ref}>
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
          <AboutSection>
            <AboutHeader>About</AboutHeader>
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
              much to learn about web development and I find myself experimenting with different
              ways to build projects. I currently prefer to build my projects using{' '}
              <StrongText>React</StrongText>, <StrongText>Vite</StrongText>, and{' '}
              <StrongText>Styled Components</StrongText>.
            </AboutText>
          </AboutSection>
        </AboutGrid>
      </AboutWrapper>
    </Hero>
    <HeroFade />
  </>
));

export default About;
