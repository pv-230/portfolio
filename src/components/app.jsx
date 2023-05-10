import { useState, useEffect, useRef } from 'react';
import 'normalize.css';
import styled from 'styled-components';

import GlobalStyle from '../common/global-styles';
import Header from './header';
import Hero from './hero';
import About from './about';
import Projects from './projects';
import Footer from './footer';

const StyledApp = styled.div`
  color: var(--color-primary-font);
  background-color: var(--color-app-bg);
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: clamp(10px, 5vmin, 50px);
`;

//-------------------------------------------------------------------------------------------------

function App() {
  const [currentSection, setCurrentSection] = useState('hero');
  const refs = {
    hero: useRef(null),
    about: useRef(null),
    projects: useRef(null),
  };

  /**
   * Sets the current section that is being viewed when any part of the observed elements reach
   * the center of the viewport.
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (let i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            setCurrentSection(entries[i].target.id);
            break;
          }
        }
      },
      { rootMargin: '-50% 0% -50% 0%' }
    );

    observer.observe(refs.hero.current);
    observer.observe(refs.about.current);
    observer.observe(refs.projects.current);
  }, []);

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Header currentSection={currentSection} refs={refs} />
        <StyledMain>
          <Hero ref={refs.hero} />
          <About ref={refs.about} />
          <Projects ref={refs.projects} />
        </StyledMain>
        <Footer />
      </StyledApp>
    </>
  );
}

export default App;
