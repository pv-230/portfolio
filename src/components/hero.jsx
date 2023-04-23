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
  overflow: hidden;
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

const Circle = styled.hgroup`
  --circle-size: max(300px, 50vmin);
  --circle-border-width: 4px;
  --circle-border-blur: 4px;
  --circle-border-color: var(--color-neutral-1);
  --spread-px: calc(var(--circle-size) / 4);
  --offset: calc(
    var(--circle-size) + var(--spread-px) + var(--circle-border-width) + var(--circle-border-blur)
  );
  --shadow-color: red;
  --shadow-color: var(--color-app-bg);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: var(--circle-size);
  height: var(--circle-size);
  z-index: 1;
  border-radius: 50%;
  background-color: var(--color-app-bg);
  box-shadow: 0 0 0 var(--spread-px) var(--shadow-color),
    0 0 var(--circle-border-blur) var(--circle-border-width) transparent;
  animation: 2s ease-in-out forwards reveal-circle, 1s ease-in 1.85s forwards flash;

  @keyframes reveal-circle {
    99% {
      box-shadow: 0 var(--offset) 0 var(--spread-px) var(--shadow-color),
        0 0 var(--circle-border-blur) var(--circle-border-width) var(--circle-border-color);
    }
    100% {
      box-shadow: 0 var(--offset) 0 var(--spread-px) transparent,
        0 0 var(--circle-border-blur) var(--circle-border-width) var(--circle-border-color);
    }
  }

  @keyframes flash {
    from {
      background-color: var(--circle-border-color);
    }

    to {
      background-color: var(--color-neutral-10);
    }
  }
`;

const HeaderText = styled.p`
  font-size: 2rem;
  font-weight: 500;
  opacity: 0%;
  animation: 0.5s linear 1.85s forwards fade-in;
`;

const HeaderTitle = styled.h1`
  font-size: 2.75rem;
  font-weight: 500;
  text-align: center;
  color: var(--color-gold);
  opacity: 0%;
  animation: 0.5s linear 3s forwards fade-in;
`;

//-------------------------------------------------------------------------------------------------

function Hero() {
  return (
    <StyledHero>
      <Circle>
        <HeaderText>I am</HeaderText>
        <HeaderTitle>Pete Vasiljev</HeaderTitle>
      </Circle>
      <HeroCircuitBg />
    </StyledHero>
  );
}

export default Hero;
