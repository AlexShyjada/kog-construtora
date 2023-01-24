import { styled } from "../../styles/index";

export const StyledProduct = styled("section", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "60px",
});

export const Container = styled("div", {
  width: "100%",
  maxWidth: "1223px",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
});

export const StyledTitleContainer = styled("div", {
  display: "flex",
  justifyContent: "space-between",

  "div.titleContent": {
    display: "flex",
    flexDirection: "column",

    span: {
      fontWeight: "500",
      fontSize: "14px",
      lineHeight: "17px",
      letterSpacing: "1px",
      textTransform: "uppercase",
    },

    h2: {
      fontWeight: "700",
      fontSize: "48px",
      lineHeight: "59px",
    },
  },

  button: {
    height: "48px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "0 32px",
    color: "$base1",
    background: "$brandColor",

    "&:hover": {
      background: "$brandColorHover",
    },
  },
});

export const StyledServicesContainer = styled("div", {
  display: "grid",
  gap: "20px",
  gridTemplateColumns: "repeat(3, 1fr)",
});

export const StyledCard = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "24px",
  gap: "12px",
  background: "$base3",

  "h3.productTitle": {
    fontWeight: "700",
    fontSize: "28px",
    lineHeight: "41px",
    letterSpacing: "0.25px",
  },

  "span.productDescription": {
    height: "100px",
    fontSize: "18px",
    lineHeight: "26px",
    letterSpacing: "0.15px",
  },
});
