import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --system-ui: Inter, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol';
    
    --header-height: 50px;
    --content-max-width: 820px;
    --circle-size: max(200px, 50vmin);

    --color-neutral-1: hsl(0, 0%, 95%);
    --color-neutral-2: hsl(0, 0%, 85%);
    --color-neutral-3: hsl(0, 0%, 75%);
    --color-neutral-4: hsl(0, 0%, 63%);
    --color-neutral-5: hsl(0, 0%, 50%);
    --color-neutral-6: hsl(0, 0%, 37%);
    --color-neutral-7: hsl(0, 0%, 25%);
    --color-neutral-8: hsl(0, 0%, 17%);
    --color-neutral-9: hsl(0, 0%, 9%);
    --color-neutral-10: hsl(0, 0%, 5%);
  
    --color-gold: hsl(50, 75%, 50%);
    --color-green: hsl(120, 50%, 50%);
    --color-red: hsl(0, 75%, 50%);

    --color-app-bg: var(--color-neutral-9);
    --color-primary-font: var(--color-neutral-2);
    --color-secondary-font: var(--color-neutral-4);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    font-family: var(--system-ui);
  }

  @keyframes fade-in {
    to {
      opacity: 100%;
    }
  }
`;

export default GlobalStyle;
