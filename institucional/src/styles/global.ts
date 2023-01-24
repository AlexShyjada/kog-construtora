import { globalCss } from ".";

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    background: "none",
    border: "none"
  },

  body: {
    color: '$brandColor',
    backgroundColor: '$base2',
    '-webkit-font-smoothing': 'antialised',
  },
  
  '::-webkit-scrollbar': {
    width: '6px',
    height: '0',
    scrollbarWidth: '6px',
  },

  '::-webkit-scrollbar, ::-webkit-scrollbar-track': {
    background: '$base1'
  },
  
  '::-webkit-scrollbar-thumb': {
    background: '$brandColor'
  },

  'body, input, textarea, button': {
    fontFamily: "$mainFont",
    fontWeight: "400",
  },
  
  a: {
    textDecoration: "none"
  },
  
})