import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import '../common/reset.css';
import GlobalStyle from '../common/global-styles';
import Header from './header';
import Hero from './hero';
import About from './about';
import Projects from './projects';
import Contact from './contact';

const StyledApp = styled.div`
  color: var(--color-primary-font);
  background-color: var(--color-app-bg);
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

//-------------------------------------------------------------------------------------------------

function App() {
  const [currentSection, setCurrentSection] = useState(null);

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  /**
   * Determines which section is currently active so that the nav bar can be updated.
   * TODO: Adjust observed elements to fix inaccurate nav bar highlighting.
   */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (let i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            switch (entries[i].target.id) {
              case 'about':
                setCurrentSection('about');
                break;
              case 'projects':
                setCurrentSection('projects');
                break;
              case 'contact':
                setCurrentSection('contact');
                break;
              default:
                console.error('Unexpected IntersectionObserverEntry target id');
            }

            break;
          }
        }
      },
      { threshold: 0.5 }
    );

    // observer.observe(aboutRef.current);
    // observer.observe(projectsRef.current);
    // observer.observe(contactRef.current);
  }, []);

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Header currentSection={currentSection} />
        <StyledMain>
          <Hero />
          <About ref={aboutRef} />
          <Projects ref={projectsRef} />
          <Contact ref={contactRef} />
        </StyledMain>
      </StyledApp>
    </>
  );
}

export default App;
