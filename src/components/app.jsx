import styled from 'styled-components';

import '../common/reset.css';
import GlobalStyle from '../common/global-styles';
import Header from './header';
import About from './about';

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
          <section>
            <h2>Projects</h2>
            <p>This is the project section.</p>
          </section>
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
