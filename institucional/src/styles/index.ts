import { createStitches } from "@stitches/react";

export const {
  css,
  theme,
  config,
  styled,
  keyframes,
  globalCss,
  getCssText,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      //Brand Collors
      brandColor: 'rgba(3, 19, 22, 1)',
      brandColorHover: 'rgba(8, 24, 27, 1)',

      //Base Colors
      base4: 'rgba(27, 27, 27, 1)',
      base3: 'rgba(236, 236, 236, 1)',
      base2: 'rgba(243, 243, 243, 1)',
      base1: 'rgba(251, 251, 251, 1)',
    },

    fonts: {
      mainFont: '"montserrat", sans-serif',
    },

    media: {
      bp1: '(max-width: 1300px)',
      bp2: '(max-width: 1024px)',
      bp3: '(max-width: 900px)',
      bp4: '(max-width: 720px)',
      bp5: '(max-width: 600px)',
    },
  }
})