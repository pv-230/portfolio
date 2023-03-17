import styled from 'styled-components';

import '../common/reset.css';
import GlobalStyle from '../common/global-styles';
import Header from './header';

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
          <hgroup>
            <h1>Peter Vasiljev</h1>
            <p>Aspiring web developer</p>
          </hgroup>
          <section>
            <h2>About</h2>
            <p>This is the about section.</p>
          </section>
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
