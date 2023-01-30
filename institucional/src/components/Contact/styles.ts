import styled from "styled-components";

export const StyledContact = styled.section`
  display: flex;
  justify-content: center;
  
  .container {
    display: flex;
    flex-direction: column;
    gap: 40px;

    .contactHeader {
      display: flex;
      gap: 40px;
      justify-content: space-between;
  
      .titleContainer {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .titleSpan {
          font-weight: 500;
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .titleSecundary {
          font-weight: 700;
          font-size: 48px;
          line-height: 59px;
          color: var(--brandColor);
        }
      }
  
      .buttonContainer {
        display: flex;
        gap: 24px;
        align-items: center;
      }
    }
  
    .gridCards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
  
      .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 24px 16px;
        gap: 24px;
        border: solid 1px var(--border);
  
        .cardTextContainer {
          display: flex;
          flex-direction: column;
          gap: 6px;
  
          .tertiaryText {
            font-weight: 700;
            font-size: 24px;
            line-height: 32px;
            color: var(--brandColor);
          }
          .contactDescription {
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: var(--brandColor);
          }
        }
      }
    }
  }
`;

export const StyledInstagram = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 16px 24px;
  color: var(--brandColor);
  border: 1px solid var(--brandColor);
  `
export const StyledWhatsapp = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 16px 24px;
  color: var(--base1);
  background: var(--brandColor);
  border: 1px solid var(--brandColor);
`



export const Container = styled.div`
  width: 100%;
  max-width: 1223px;
  padding: 20px 0;
`;
