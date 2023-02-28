import styled from 'styled-components'

interface IStyledHeroProps {
  image: string;
}

export const StyledHero = styled.section<IStyledHeroProps>`
  width: 100vw;
  max-height: 550px;
  height: 550px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 61.3%, rgba(0, 0, 0, 0.8) 100%), url(${(props)=> props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  
  @media (max-width: 500px) {
    height: 450px;
  }
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