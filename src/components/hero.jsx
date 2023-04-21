import styled from 'styled-components';

import circuit from '../assets/svg/circuit.svg';

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: var(--header-height) 0;
  min-height: 100vh;
  background-color: var(--color-app-bg);
`;

const HeroCircuitBg = styled.div`
  position: absolute;
  top: 0;
  background-image: linear-gradient(to bottom, transparent 90%, var(--color-app-bg)),
    url(${circuit});
  background-position: center;
  width: 100%;
  min-height: 100vh;
  opacity: 0%;
  animation: 1s linear 2s forwards fade-in;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 2px 1fr 1fr 2px;
  grid-template-rows: 2px 1fr 2px;
  z-index: 1;
  width: min(90vw, 500px);
  height: min(50vh, 200px);
`;

const HeroContent = styled.div`
  grid-column: 2 / 4;
  grid-row: 2 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-app-bg);
  animation: 0.25s linear 0.75s forwards darken-bg;

  @keyframes darken-bg {
    to {
      background-color: var(--color-neutral-10);
    }
  }
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
  animation: 0.5s linear 1s forwards fade-in;
`;

const HeaderTitle = styled.h1`
  font-size: 2.75rem;
  font-weight: 500;
  text-align: center;
  color: var(--color-gold);
  opacity: 0%;
  animation: 0.5s linear 2s forwards fade-in;
`;

const Line = styled.div`
  width: ${({ vertical }) => (vertical ? '2px' : '0px')};
  height: ${({ vertical }) => (vertical ? '0px' : '2px')};
  background-image: ${({ vertical, halfLeft, halfRight }) =>
    `linear-gradient(to ${vertical ? 'bottom' : 'right'}, ${
      halfLeft
        ? 'var(--color-neutral-6), var(--color-neutral-8)'
        : `${
            halfRight
              ? 'var(--color-neutral-8), var(--color-neutral-6)'
              : 'var(--color-neutral-6), var(--color-neutral-8), var(--color-neutral-6)'
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

//-------------------------------------------------------------------------------------------------

function Hero() {
  return (
    <StyledHero>
      <HeroGrid>
        <Line gridColumn="1 / 5" gridRow="1 / 2" delay={0} justify="center" />
        <Line vertical gridColumn="1 / 2" gridRow="1 / 4" delay={0.25} />
        <Line vertical gridColumn="4 / 5" gridRow="1 / 4" delay={0.25} />
        <Line gridColumn="1 / 3" gridRow="3 / 4" delay={0.5} halfLeft />
        <Line gridColumn="3 / 5" gridRow="3 / 4" delay={0.5} justify="end" halfRight />
        <HeroContent>
          <HeaderGroup>
            <HeaderText>I am</HeaderText>
            <HeaderTitle>Pete Vasiljev</HeaderTitle>
          </HeaderGroup>
        </HeroContent>
      </HeroGrid>
      <HeroCircuitBg />
    </StyledHero>
  );
}

export default Hero;
