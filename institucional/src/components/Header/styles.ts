import styled from 'styled-components'

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  background: var(--base1);
  height: 72px;

  z-index: 999;
  position: fixed;
  inset: 0 0 auto 0;
`

export const StyledContainer = styled.div`
  width: 1224px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledNav = styled.nav`
  display: flex;
  gap: 20px;

  a {
    color: var(--brandColor);
    transition: 0.2s;

    &:hover {
      font-weight: 700;
    }
  };
`

export const StyledButton = styled.button`
  a {
    padding: 0 12px;
    font-size: 14px;
    height: 32px;
    color: var(--brandColor);
    display: flex;
    align-items: center;
    gap: 4px;
    border: solid 1px var(--brandColor);
    transition: 0.3s;

    &:hover {
      color: var(base1);
      background: var(brandColor);
    }
  }
`