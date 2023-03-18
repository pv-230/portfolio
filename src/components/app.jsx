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
`;

//-------------------------------------------------------------------------------------------------

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <Header />
        <main>
          <About />
          <Projects />
          <Contact />
        </main>
        <footer>
          <p>This is the footer.</p>
        </footer>
      </StyledApp>
    </>
  );
}

export default App;
