import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --system-ui: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
    
    --header-height: 50px;

    --dark-font-color: hsl(0, 0%, 10%);
    --light-font-color: hsl(0, 0%, 90%);
    --dark-gray-bg-color: hsl(0, 0%, 20%);
    --gold: hsl(50, 100%, 50%);
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
