import { useState, useEffect } from "react";
import { Container, StyledHero } from "./styles";

interface BannerContent {
  id: number;
  title: string;
  description: string;
  img: {
    alt: string;
    url: string;
  };
}

const bannerContents: BannerContent[] = [
  {
    id: 1,
    title: "Palazzo Anacapri",
    description: "Projeto: FRS Arquitetura",
    img: {
      alt: "Foto",
      url: "/portfolio/palazzo-anacapri/post1.jpg",
    },
  },
  {
    id: 2,
    title: "Forest Residence",
    description: "Projeto: Daniela Lopes",
    img: {
      alt: "Foto",
      url: "/portfolio/forest-residence/post1.jpg",
    },
  },
  {
    id: 3,
    title: "Mansão José Martins Catharino",
    description: "Projeto: Nathália Velame",
    img: {
      alt: "Foto",
      url: "/portfolio/mansao-jose-martins-catharino/post2.jpg",
    },
  },
];

const BANNER_ROTATION_INTERVAL_MS = 10000;

export function Hero() {
  const [currentBannerIndex, setCurrentBannerIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBannerIndex((currentIndex: number) =>
        currentIndex === bannerContents.length - 1 ? 0 : currentIndex + 1
      );
    }, BANNER_ROTATION_INTERVAL_MS);

    return () => clearInterval(intervalId);
  }, []);

  const { title, description, img } = bannerContents[currentBannerIndex];

  return (
    <StyledHero id="Inicio" image={img.url}>
      <Container>
        <h2>{title}</h2>
        <span>{description}</span>
      </Container>
    </StyledHero>
  );
}