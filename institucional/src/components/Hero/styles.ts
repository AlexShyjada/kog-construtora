import { styled } from "../../styles/index";

export const StyledHero = styled("section", {
  width: '100vw',
  height: '700px',
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 61.3%, rgba(0, 0, 0, 0.8) 100%), url(imgHero1.png)",
  
  
  '@bp2': {
    height: '500px',
  }
});

export const Container = styled("a", {
  width: "100%",
  maxWidth: "1223px",
  padding: "20px 0",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  color: "$base1",
  cursor: "pointer",

  h2: {
    fontWeight: "700",
    fontSize: "34px",
    lineHeight: "41px",
    letterSpacing: "0.25px",
  },

  spen: {
    fontWeight: "500",
    fontSize: "20px",
    lineHeight: "32px",
    letterSpacing: "0.15px",
  },

});
