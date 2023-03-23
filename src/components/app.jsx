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
  background-color: var(--dark-10);
`;

const Blank = styled.div`
  height: 100%;
  background-color: var(--dark-10);
`;

//-------------------------------------------------------------------------------------------------

function App() {
  const [renderApp, setRenderApp] = useState(false);
  const [currentSection, setCurrentSection] = useState('about');

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  /**
   * Loads the primary font file and renders the app when loading has finished so that FOUC is
   * is avoided. Fallback fonts will be used if an error is received during loading.
   */
  useEffect(() => {
    const font = new FontFace(
      'Source Sans Pro',
      'url(https://fonts.gstatic.com/s/sourcesanspro/v21/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNa7lqDY.woff2)'
    );

    document.fonts.add(font);
    font.load();
    document.fonts.ready
      .catch((err) => console.error(`Unable to load 'Source Sans Pro' font: ${err.message}`))
      .finally(() => setRenderApp(true));
  }, []);

  /**
   * Determines which section is currently active so that the nav bar can be updated.
   */
  useEffect(() => {
    if (!renderApp) return;

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
  }, [renderApp]);

  return (
    <>
      <GlobalStyle />
      {renderApp ? (
        <StyledApp>
          <Header currentSection={currentSection} />
          <main>
            <About ref={aboutRef} />
            <Projects ref={projectsRef} />
            <Contact ref={contactRef} />
          </main>
          <footer>
            <p>This is the footer.</p>
          </footer>
        </StyledApp>
      ) : (
        <Blank />
      )}
    </>
  );
}

export default App;
