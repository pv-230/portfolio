import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import '../common/reset.css';
import GlobalStyle from '../common/global-styles';
import Header from './header';
import About from './about';
import Projects from './projects';
import Contact from './contact';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--dark-bg-color);
`;

const BackgroundImage = styled.div`
  background-image: url('src/assets/circuit.svg');
  background-position: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  opacity: 0%;
  animation: 2s linear 2.25s forwards fadein;
`;

const StyledMain = styled.main`
  z-index: 1;
`;

//-------------------------------------------------------------------------------------------------

function App() {
  const [currentSection, setCurrentSection] = useState('about');

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

    observer.observe(aboutRef.current);
    observer.observe(projectsRef.current);
    observer.observe(contactRef.current);
  }, []);

  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <BackgroundImage />
        <Header currentSection={currentSection} />
        <StyledMain>
          <About ref={aboutRef} />
          <Projects ref={projectsRef} />
          <Contact ref={contactRef} />
        </StyledMain>
        <footer>
          <p>This is the footer.</p>
        </footer>
      </StyledApp>
    </>
  );
}

export default App;
