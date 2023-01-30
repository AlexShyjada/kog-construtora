import styled from "styled-components";

export const StyledPortfolio = styled.section`
  display: flex;
  justify-content: center;

  .contactHeader {
    display: flex;
    justify-content: space-between;
    gap: 40px;

    .titleContainer {
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
      align-items: center;
    }
  }

  .gridCardsPortfólios {
    display: grid;
    gap: 24px;
    grid-template-columns: repeat(2, 1fr);

    .portifolioCard {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 0px;
      gap: 24px;

      .figure {
        position: relative;
        width: 100%;
        height: 330px;
        img {
          object-fit: cover;
        }
      }

      .contentContainer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 24px;

        .textContainer {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 0px;
          gap: 8px;

          h3 {
            font-weight: 700;
            font-size: 24px;
            line-height: 29px;
            color: var(--brandColor);
          }

          .portfolioCardDescription {
            height: 70px;
            -webkit-box-orient: vertical;
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;

            font-weight: 400;
            font-size: 18px;
            line-height: 32px;
            letter-spacing: 0.15px;
            color: var(--brandColor);
            opacity: 0.7;
          }
        }

        a {
          font-weight: 700;
          font-size: 16px;
          line-height: 20px;
          letter-spacing: 0.2px;
          text-decoration-line: underline;
          text-transform: uppercase;
        }
      }
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1223px;
  padding: 20px 0;
`;

export const StyledButton = styled.button`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.17px;
  background: #08181b;
  padding: 8px 16px;
  color: var(--base1);
  opacity: 1;
`;
