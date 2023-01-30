import styled from 'styled-components'

export const StyledPortfolio = styled.section`

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

`

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