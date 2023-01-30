import Image from "next/image";
import { portifolioContent } from "./portifolioContent";
import { Container, StyledButton, StyledPortfolio } from "./styles";

export function Portfolio() {
  return (
    <StyledPortfolio>
      <Container>
        <header className="contactHeader">
          <div className="titleContainer">
            <span className="titleSpan">
              Conheça alguns dos nossos projetos
            </span>
            <h2 className="titleSecundary">Nosso Portifólio</h2>
          </div>
          <div className="buttonContainer">
            <StyledButton>Todos os projetos</StyledButton>
            <StyledButton>Residencial</StyledButton>
            <StyledButton>Saúde</StyledButton>
            <StyledButton>Comercial</StyledButton>
          </div>
        </header>

        <div className="gridCardsPortfólios">
          {portifolioContent.map((card) => (
            <div key={card.id} className="portifolioCard">
              <figure className="figure">
                <Image alt={card.title} src={card.imgList[0].url} fill />
              </figure>

              <div className="contentContainer">
                <div className="textContainer">
                  <h3> {card.title} </h3>
                  <p className="portfolioCardDescription">{card.description}</p>
                </div>
                <a>Saiba mais</a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </StyledPortfolio>
  );
}
