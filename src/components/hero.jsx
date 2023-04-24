import styled from 'styled-components';

import circuit from '../assets/svg/circuit.svg';

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-top: var(--header-height);
  min-height: 100vh;
  background-color: var(--color-app-bg);
`;

const HeroCircuitBg = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  min-height: 100vh;
  background-image: linear-gradient(to bottom, transparent 90%, var(--color-app-bg)),
    url(${circuit});
  background-position: center;
  opacity: 0%;
  animation: 1s linear 2s forwards fade-in;
`;

const Circle = styled.hgroup`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  position: relative;
  z-index: 1;
  width: var(--circle-size);
  height: var(--circle-size);
  border-radius: 50%;
  background-color: var(--color-app-bg);
  animation: 1s ease-in 2s forwards flash;

  @keyframes flash {
    from {
      background-color: var(--color-neutral-1);
    }

    to {
      background-color: var(--color-neutral-10);
    }
  }
`;

const HeaderText = styled.p`
  font-size: clamp(1.5rem, 5vmin, 6rem);
  font-weight: 500;
  opacity: 0%;
  animation: 0.5s linear 2s forwards fade-in;
`;

const HeaderTitle = styled.h1`
  font-size: clamp(1.5rem, 5vmin, 6rem);
  font-weight: 500;
  text-align: center;
  color: var(--color-gold);
  opacity: 0%;
  animation: 0.5s linear 3s forwards fade-in;
`;

const CircleSvg = styled.svg`
  position: absolute;
  top: 0;
  width: var(--circle-size);
  height: var(--circle-size);
  transform: rotate(-90deg);
  border-radius: 50%;
  animation: 0.25s 2s forwards border-glow;

  @keyframes border-glow {
    to {
      box-shadow: 0 0 calc(var(--circle-size) / 16) 0 var(--color-green);
    }
  }
`;

const CircleBorder = styled.circle.attrs({
  cx: '50%',
  cy: '50%',
  r: '50%',
  fill: 'none',
  stroke: 'var(--color-neutral-1)',
  strokeWidth: 5,
})`
  stroke-dasharray: calc(2 * 3.1415926536 * (var(--circle-size) / 2));
  stroke-dashoffset: calc(2 * 3.1415926536 * (var(--circle-size) / 2));
  animation: 2s forwards draw-border;

  @keyframes draw-border {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

//-------------------------------------------------------------------------------------------------

function Hero() {
  return (
    <StyledHero>
      <Circle>
        <HeaderText>I am</HeaderText>
        <HeaderTitle>Pete Vasiljev</HeaderTitle>
        <CircleSvg xmlns="http://www.w3.org/2000/svg">
          <CircleBorder />
        </CircleSvg>
      </Circle>
      <HeroCircuitBg />
    </StyledHero>
  );
}

export default Hero;
