import styled from 'styled-components';

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: var(--color-app-bg);
  animation: 0.75s linear 2.25s forwards reveal;
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

const HeroFade = styled.div`
  height: 10vh;
  background-color: var(--color-app-bg);
  background-image: linear-gradient(transparent, var(--color-app-bg));
  animation: 0.75s linear 2.25s forwards reveal;
`;

/*
const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: var(--content-max-width);
  padding: 20px;
  padding-top: calc(var(--header-height) + 40px);
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

<Line gridColumn="1 / 5" gridRow="1 / 2" delay={1.5} justify="center" />
<Line vertical gridColumn="1 / 2" gridRow="1 / 4" delay={1.75} />
<Line vertical gridColumn="4 / 5" gridRow="1 / 4" delay={1.75} />
<Line gridColumn="1 / 3" gridRow="3 / 4" delay={2} halfLeft />
<Line gridColumn="3 / 5" gridRow="3 / 4" delay={2} justify="end" halfRight />
*/

//-------------------------------------------------------------------------------------------------

function Hero() {
  return (
    <>
      <StyledHero>
        <HeaderGroup>
          <HeaderText>I am</HeaderText>
          <HeaderTitle>Pete Vasiljev</HeaderTitle>
        </HeaderGroup>
      </StyledHero>
      <HeroFade />
    </>
  );
}

export default Hero;
