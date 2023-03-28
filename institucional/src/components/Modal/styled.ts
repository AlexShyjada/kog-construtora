import styled from "styled-components";

export const StyledButtonCloseModal = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
`;

export const StyledImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  img {
    width: 100%;
    height: fit-content;
    background-size: cover;
    object-fit: contain;
    background: var(--base2);
    border: solid 1px var(--border);
  }
  @media (max-width: 900px) {
    img {
      height: 100%;
      max-height: 65vh;
    }
  }
  
`;

export const StyledControlers = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;

  .previousImage, .nextImage {
    display: flex;
    gap: 8px;
    align-items: center;
    cursor: pointer;

    &.disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }
  }
`;
