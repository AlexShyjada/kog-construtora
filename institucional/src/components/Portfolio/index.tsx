import Image from "next/image";
import { portifolioContent } from "./portifolioContent";
import { Container, StyledButton, StyledPortfolio } from "./styles";
import { useState } from "react";
import { ModalPortfolio } from "../Modal";
import { PortfolioCard } from "./portfolioCard";

export function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const portfolioArray =
    selectedFilter === "residencial"
      ? portifolioContent.filter(
          (portfolioItem) => portfolioItem.projectType === "residencial"
        )
      : selectedFilter === "saude"
      ? portifolioContent.filter(
          (portfolioItem) => portfolioItem.projectType === "saude"
        )
      : selectedFilter === "comercial"
      ? portifolioContent.filter(
          (portfolioItem) => portfolioItem.projectType === "comercial"
        )
      : portifolioContent;

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
              onClick={() => setSelectedFilter("all")}
              className="filter1"
            >
              Todos os projetos
            </StyledButton>
            <StyledButton
              isDisabled={selectedFilter === "residencial" ? false : true}
              onClick={() => setSelectedFilter("residencial")}
              className="filter2"
            >
              Residencial
            </StyledButton>
            <StyledButton
              isDisabled={selectedFilter === "saude" ? false : true}
              onClick={() => setSelectedFilter("saude")}
              className="filter3"
            >
              Saúde
            </StyledButton>
            <StyledButton
              isDisabled={selectedFilter === "comercial" ? false : true}
              onClick={() => setSelectedFilter("comercial")}
              className="filter4"
            >
              Comercial
            </StyledButton>
          </div>
        </header>

        <div className="gridCardsPortfólios">
          {portfolioArray.map((card) => (
            <PortfolioCard
              title={card.title}
              key={card.id}
              description={card.description}
              imgList={card.imgList}
            />
          ))}
        </div>
      </Container>
    </StyledPortfolio>
  );
}
