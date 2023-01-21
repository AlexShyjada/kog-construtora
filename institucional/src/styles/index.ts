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

      //Red
      redDark: 'rgba(226, 54, 69, 1)',

      //Yellow
      yellowDark: 'rgba(237, 181, 7, 1)',

      //Green
      greenDark: 'rgba(0, 143, 102, 1)',
    },

    fonts: {
      mainFont: '"sora", sans-serif',
    }
  }
})