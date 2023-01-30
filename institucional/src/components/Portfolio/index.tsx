import { StyledButton, StyledPortfolio } from "./styles";

export function Portfolio() {
  return (
    <StyledPortfolio>
      <header className="contactHeader">
        <div className="titleContainer">
          <span className="titleSpan">Conheça alguns dos nossos projetos</span>
          <h2 className="titleSecundary">Nosso Portifólio</h2>
        </div>
        <div className="buttonContainer">
          <StyledButton>Todos os projetos</StyledButton>
          <StyledButton>Residencial</StyledButton>
        </div>
      </header>
    </StyledPortfolio>
  );
}
