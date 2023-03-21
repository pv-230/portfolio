import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --system-ui: 'Source Sans Pro', system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
    
    --header-height: 50px;

    --light-90: hsl(0, 0%, 90%);
    --dark-10: hsl(0, 0%, 10%);
    --dark-20: hsl(0, 0%, 20%);
    --gold: hsl(50, 100%, 50%);
    --green: hsl(120, 30%, 50%);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
    font-family: var(--system-ui);
  }
`;

export default GlobalStyle;
