import styled from 'styled-components';

import '../common/reset.css';
import GlobalStyle from '../common/global-styles';
import Header from './header';
import About from './about';
import Projects from './projects';

const StyledApp = styled.div`
  height: 100%;
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
          <section>
            <h2>Contact</h2>
            <p>This is the contact section.</p>
          </section>
        </main>
        <footer>
          <p>This is the footer.</p>
        </footer>
      </StyledApp>
    </>
  );
}

export default App;
