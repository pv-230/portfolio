import styled from 'styled-components';

const StyledApp = styled.div`
  height: 100%;
`;

function App() {
  return (
    <StyledApp>
      <header>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
              <a href="/">Projects</a>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
        <button type="button">Theme</button>
      </header>
      <main>
        <section>
          <h1>Home</h1>
          <p>This is the home section.</p>
        </section>
        <section>
          <h1>Projects</h1>
          <p>This is the project section.</p>
        </section>
        <section>
          <h1>Contact</h1>
          <p>This is the contact section.</p>
        </section>
      </main>
      <footer>
        <p>This is the footer.</p>
      </footer>
    </StyledApp>
  );
}

export default App;
