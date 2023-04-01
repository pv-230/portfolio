import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --system-ui: 'Source Sans Pro', system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
    
    --header-height: 50px;
    --content-max-width: 800px;

    --light-90: hsl(0, 0%, 90%);
    --dark-5: hsl(0, 0%, 5%);
    --dark-10: hsl(0, 0%, 10%);
    --dark-20: hsl(0, 0%, 20%);
    --gold: hsl(50, 75%, 50%);
    --green: hsl(120, 50%, 50%);
    --red: hsl(0, 75%, 50%);
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

  @keyframes fadein {
    from {
      opacity: 0%;
    }
    
    to {
      opacity: 100%;
    }
  }
`;

export default GlobalStyle;
