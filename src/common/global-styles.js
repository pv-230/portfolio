import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --system-ui: system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
    
    --header-height: 50px;
    --content-max-width: 820px;

    --light-font-color: hsl(0, 0%, 75%);
    --gold-font-color: hsl(50, 75%, 50%);
    --green-font-color: hsl(120, 50%, 50%);

    --dark-bg-color: hsl(0, 0%, 9%);
    --darker-bg-color: hsl(0, 0%, 5%);
    --darker-bg-color-alpha: hsl(0, 0%, 5%, 85%);

    --gray-border-color: hsl(0, 0%, 50%);
    --halfgray-border-color: hsl(0, 0%, 25%)
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
    to {
      opacity: 100%;
    }
  }
`;

export default GlobalStyle;
