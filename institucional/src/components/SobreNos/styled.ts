import styled from "styled-components";

export const StyledSobreNos = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    padding: 65px 10px;
    display: flex;
    gap: 20px;
    max-width: 1224px;
    width: 100%;

    .textContainer {
      display: flex;
      flex-direction: column;
      gap: 32px;

      .mainContent {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .titleContainer {
          display: flex;
          flex-direction: column;
          gap: 8px;

          h2.secundaryTitle {
            font-weight: 700;
            font-size: 48px;
            line-height: 59px;
            color: var(--brandColor);
          }

          span.subtitle {
            font-weight: 500;
            font-size: 16px;
            line-height: 32px;
            letter-spacing: 2.2px;
            text-transform: uppercase;
          }
        }

        .paragrathContainer {
          display: flex;
          flex-direction: column;
          gap: 32px;

          p.paragrath {
            font-size: 16px;
            line-height: 32px;
            letter-spacing: 0.2px;
          }
        }

        .buttonContainer {
          display: flex;
          gap: 16px;
        }
      }

      .buttonContainer {
        display: flex;
        gap: 16px;

        button {
          .linkedin,
          .instagram {
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 16px;
            text-decoration: none;
            font-weight: 500;
            gap: 8px;
            border: solid 1px var(--brandColor);
            transition: 0.3s;
          }
          .instagram {
            color: var(--brandColor);

            &:hover {
              color: var(--base1);
              background: var(--brandColorDark);
            }
          }
          .linkedin {
            color: var(--base1);
            background-color: var(--brandColor);

            &:hover {
              background: var(--brandColorDark);
            }
          }
        }
      }
    }

    .imageContainer {
      position: relative;
      min-width: 594px;
      max-width: 594px;
      height: 443px;

      img {
        object-fit: cover;
      }
    }

    @media(max-width: 1223px) {
      
    }
  }
`;
