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
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Header />
        <StyledMain>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </StyledMain>
      </StyledApp>
    </>
  );
}

export default App;
