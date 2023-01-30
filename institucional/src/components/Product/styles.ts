import styled from 'styled-components'

export const StyledProduct = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
`

export const Container = styled.div`
  width: 100%;
  max-width: 1223px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  div.titleContent {
    display: flex;
    flex-direction: column;

    span {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: 1px;
      text-transform: uppercase;
    };

    h2 {
      font-weight: 700;
      font-size: 48px;
      line-height: 59px;
    };
  };

  button {
    margin-bottom: 12px;
    height: 48px;
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 32px;
    color: var(--base1);
    background: var(--brandColor);

    &:hover {
      background: "$brandColorHover",
    };
  };
`

export const StyledServicesContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
`

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  gap: 12px;
  background: var(--base3);

  h3.productTitle{
    font-weight: 700;
    font-size: 28px;
    line-height: 41px;
    letter-spacing: 0.25px;
  };

  span.productDescription {
    height: 100px;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: 0.15px;
  };
`