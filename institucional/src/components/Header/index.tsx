import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "phosphor-react";
import {
  StyledButton,
  StyledContainer,
  StyledHeader,
  StyledNav,
} from "./styles";

export function Header() {
  return (
    <StyledHeader id="Header">
      <StyledContainer>
        <Image
          width={147}
          height={60}
          src="/logo-KOG.png"
          alt="Logo KOG Construtora"
        />

        <StyledNav>
          <Link href="Hero" legacyBehavior>
            <a>Inicio</a>
          </Link>
          <Link href="Servicos" legacyBehavior>
            <a>Serviços</a>
          </Link>
          <Link href="Portfolio" legacyBehavior>
            <a>Portfólio</a>
          </Link>
          <Link href="SobreNos" legacyBehavior>
            <a>Sobre nós</a>
          </Link>
          <Link href="Contato" legacyBehavior>
            <a>Contato</a>
          </Link>
        </StyledNav>

        <StyledButton>
          <Link href="#" legacyBehavior>
            <a>
              Área do cliente
              <ArrowUpRight size={16} />
            </a>
          </Link>
        </StyledButton>
      </StyledContainer>
    </StyledHeader>
  );
}
