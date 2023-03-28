import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --brandColor: #08181b;
    --brandColorDark: #020B0D;
    --base1: #fbfbfb;
    --base2: #f3f3f3;
    --base3: #ececec;
    --border: #E0E0E0;
    --base4: #1b1b1b;
  }

  @media (max-width: 1080px) {
    body.scrollock {
      height: 100%;
      overflow: hidden;
    }
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  * {
    font-family: "Montserrat", sans-serif;
    padding: 0;
  }
  body {
    background: var(--base2);
  }
  body,
  h1,
  ul,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    padding: 0;
    margin: 0;
  }

  ul[role="list"],
  ol[role="list"] {
    list-style: none;
  }

  html:focus-within {
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  html,
  body {
    height: 100%;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  
  ::-webkit-scrollbar {
    width: 6px;
    height: 0;
    scrollbar-width: 6px;
  }

  ::-webkit-scrollbar, ::-webkit-scrollbar-track {
    background: (--border);
  };
  
  ::-webkit-scrollbar-thumb {
    background: var(--brandColor)
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
    color: inherit;
    text-decoration: none;
  }

  img,
  picture,
  video,
  canvas,
  svg {
    max-width: 100%;
    display: block;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  #root,
  #__next {
    isolation: isolate;
  }

  button {
    background: transparent;
    border: none;
  }


  .react-modal-overlay {
    padding: 10px;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(20px);
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    outline: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    max-width: 800px;
    height: fit-content;
    background: var(--base1);
    padding: 32px;
    overflow-y: scroll;
  }
  
  @media(max-width: 900px){
    .react-modal-overlay {
      align-items: flex-start;
    } 
    
    .react-modal-content {
      padding: 24px;
      width: 100%;
      max-width: 95vw;
      height: fit-content;
      max-height: 95vh;
    }
  }
`;
