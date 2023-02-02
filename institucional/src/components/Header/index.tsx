import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, List, X } from "phosphor-react";
import { useState } from "react";
import {
  StyledButton,
  StyledContainer,
  StyledHeaderDesktop,
  StyledHeaderMobile,
  StyledNav,
  StyledNavMobile,
} from "./styles";

export function Header() {
  const [isHeaderMobileActive, setIsHeaderMobileActive] = useState(false);

  return (
    <>
      <StyledHeaderDesktop id="Header">
        <StyledContainer>
          <Image
            width={147}
            height={60}
            src="/logo-KOG.png"
            alt="Logo KOG Construtora"
          />
          <StyledNav>
            <Link href="#Inicio" legacyBehavior>
              <a>Inicio</a>
            </Link>
            <Link href="#Servicos" legacyBehavior>
              <a>Áreas de atuação</a>
            </Link>
            <Link href="#Portfolio" legacyBehavior>
              <a>Portfólio</a>
            </Link>
            <Link href="#SobreNos" legacyBehavior>
              <a>Sobre nós</a>
            </Link>
            <Link href="#Contato" legacyBehavior>
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
      </StyledHeaderDesktop>

      <StyledHeaderMobile>
        <StyledContainer>
          <Image
            width={98}
            height={35}
            src="/logo-KOG.png"
            alt="Logo KOG Construtora"
          />
          {isHeaderMobileActive ? (
            <button
              onClick={() => setIsHeaderMobileActive(!isHeaderMobileActive)}
            >
              <X size={24} />
            </button>
          ) : (
            <button>
              <List
                size={24}
                onClick={() => setIsHeaderMobileActive(!isHeaderMobileActive)}
              />
            </button>
          )}
        </StyledContainer>
      </StyledHeaderMobile>
      
      <StyledNavMobile isHeaderMobileActive={isHeaderMobileActive}>
        <Link href="#Inicio" legacyBehavior>
          <a onClick={() => setIsHeaderMobileActive(!isHeaderMobileActive)}>
            Inicio
          </a>
        </Link>
        <Link href="#Servicos" legacyBehavior>
          <a onClick={() => setIsHeaderMobileActive(!isHeaderMobileActive)}>
            Áreas de atuação
          </a>
        </Link>
        <Link href="#Portfolio" legacyBehavior>
          <a onClick={() => setIsHeaderMobileActive(!isHeaderMobileActive)}>
            Portfólio
          </a>
        </Link>
        <Link href="#SobreNos" legacyBehavior>
          <a onClick={() => setIsHeaderMobileActive(!isHeaderMobileActive)}>
            Sobre nós
          </a>
        </Link>
        <Link href="#Contato" legacyBehavior>
          <a onClick={() => setIsHeaderMobileActive(!isHeaderMobileActive)}>
            Contato
          </a>
        </Link>
      </StyledNavMobile>
    </>
  );
}
