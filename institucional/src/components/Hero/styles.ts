import styled from 'styled-components'

export const StyledHero = styled.section`
  width: 100vw;
  height: 700px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 61.3%, rgba(0, 0, 0, 0.8) 100%), url(imgHero1.png);
`

export const Container = styled.a`
  width: 100%;
  max-width: 1223px;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--base1);
  cursor: pointer;

  h2 {
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    letter-spacing: 0.25px;
  };

  span {
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    letter-spacing: 0.15px;
  };
`