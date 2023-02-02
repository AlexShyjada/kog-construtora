import Image from "next/image";
import { portifolioContent } from "./portifolioContent";
import { Container, StyledButton, StyledPortfolio } from "./styles";
import { useState } from "react";

export function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  return (
    <StyledPortfolio id="Portfolio">
      <Container>
        <header className="contactHeader">
          <div className="titleContainer">
            <span className="titleSpan">
              Conheça alguns dos nossos projetos
            </span>
            <h2 className="titleSecundary">Nosso Portifólio</h2>
          </div>
          <div className="buttonContainer">
            <StyledButton
              isDisabled={selectedFilter === "all" ? false : true}
              onClick={() => setSelectedFilter('all')}
              className="filter1"
            >
              Todos os projetos
            </StyledButton>
            <StyledButton
              isDisabled={selectedFilter === "residencial" ? false : true}
              onClick={() => setSelectedFilter('residencial')}
              className="filter2"
            >
              Residencial
            </StyledButton>
            <StyledButton
              isDisabled={selectedFilter === "saude" ? false : true}
              onClick={() => setSelectedFilter('saude')}
              className="filter3"
            >
              Saúde
            </StyledButton>
            <StyledButton
              isDisabled={selectedFilter === "comercial" ? false : true}
              onClick={() => setSelectedFilter('comercial')}
              className="filter4"
            >
              Comercial
            </StyledButton>
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
