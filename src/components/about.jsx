import { forwardRef } from 'react';
import styled from 'styled-components';

import { SectionHeader, AdaptiveParagraph } from '../common/common-styles';

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--color-app-bg);
  animation: 0.75s linear 2.25s forwards reveal;
`;

const HeroFade = styled.div`
  height: 10vh;
  background-color: var(--color-app-bg);
  background-image: linear-gradient(transparent, var(--color-app-bg));
  animation: 0.75s linear 2.25s forwards reveal;
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
  font-weight: 500;
  opacity: 0%;
  animation: 0.75s forwards fadein;
`;

const HeaderTitle = styled.h1`
  font-size: 2.75rem;
  font-weight: 500;
  text-align: center;
  color: var(--color-gold);
  opacity: 0%;
  animation: 0.75s 0.75s forwards fadein;
`;

const Line = styled.div`
  width: ${({ vertical }) => (vertical ? '2px' : '0px')};
  height: ${({ vertical }) => (vertical ? '0px' : '2px')};
  background-image: ${({ vertical, halfLeft, halfRight }) =>
    `linear-gradient(to ${vertical ? 'bottom' : 'right'}, ${
      halfLeft
        ? 'var(--color-neutral-5), var(--color-neutral-8)'
        : `${
            halfRight
              ? 'var(--color-neutral-8), var(--color-neutral-5)'
              : 'var(--color-neutral-5), var(--color-neutral-8), var(--color-neutral-5)'
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
      background-color: var(--color-neutral-10);
    }
  }
`;

const AboutHeader = styled(SectionHeader)`
  font-size: 2.2rem;
  font-weight: 500;
  opacity: 0%;
  animation: 0.75s 2.25s forwards fadein;
`;

const AboutText = styled(AdaptiveParagraph)`
  opacity: 0%;

  &:nth-of-type(1) {
    animation: 0.75s 2.5s forwards fadein;
  }

  &:nth-of-type(2) {
    animation: 0.75s 2.75s forwards fadein;
  }
`;

const StrongText = styled.strong`
  color: var(--color-green);
  font-weight: 500;
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
