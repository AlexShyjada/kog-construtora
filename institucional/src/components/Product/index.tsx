import {
  StyledCard,
  StyledProduct,
  StyledServicesContainer,
  StyledTitleContainer,
  Container,
} from "./styles";
import { ArrowLineUpRight } from "phosphor-react";
import { ProductList } from "./productsContent";
import Image from "next/image";

export function Product() {
  return (
    <StyledProduct id="Servicos">
      <Container>
        <StyledTitleContainer>
          <div className="titleContent">
            <span>O que podemos fazer por você?</span>
            <h2>Áreas de Atuação</h2>
          </div>
          <button>
            Solicitar Orçamento
            <ArrowLineUpRight size={16} />
          </button>
        </StyledTitleContainer>

        <StyledServicesContainer>
          {ProductList.map((product) => (
            <StyledCard key={product.id} className={`card${product.id+1}`}>
              <Image
                src={product.imgURL}
                width={60}
                height={80}
                alt={`Ícone que representa o serviço de ${product.title}`}
              />
              <h3 className="productTitle">{product.title}</h3>
              <span className="productDescription">{product.description}</span>
            </StyledCard>
          ))}
        </StyledServicesContainer>
      </Container>
    </StyledProduct>
  );
}
