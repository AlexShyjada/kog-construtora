interface iPortifolioContentProps {
  id: number;
  title: string;
  description: string;
  imgList: {
    id: 1;
    alt: string;
    url: string;
  }[];
}

export const portifolioContent = [
  {
    id: 1,
    title: "Projeto 1",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed justo in maecenas elementum dignissim. Ultrices non duis velit tempus felis. Volutpat cursus varius tellus nisl commodo augue elit malesuada.",
    imgList: [
      {
        id: 1,
        alt: "teste",
        url: "/projeto01-01.png",
      },
      {
        id: 2,
        alt: "teste2",
        url: "/projeto01-02.png",
      },
      {
        id: 3,
        alt: "teste2",
        url: "/projeto01-03.png",
      },
      {
        id: 4,
        alt: "teste2",
        url: "/projeto01-04.png",
      },
    ],
  },
  {
    id: 2,
    title: "Projeto 2",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed justo in maecenas elementum dignissim. Ultrices non duis velit tempus felis. Volutpat cursus varius tellus nisl commodo augue elit malesuada.",
    imgList: [
      {
        id: 1,
        alt: "teste",
        url: "/projeto01-01.png",
      },
      {
        id: 2,
        alt: "teste2",
        url: "/projeto01-02.png",
      },
      {
        id: 3,
        alt: "teste2",
        url: "/projeto01-03.png",
      },
      {
        id: 4,
        alt: "teste2",
        url: "/projeto01-04.png",
      },
    ],
  },
  {
    id: 3,
    title: "Projeto 2",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed justo in maecenas elementum dignissim. Ultrices non duis velit tempus felis. Volutpat cursus varius tellus nisl commodo augue elit malesuada.",
    imgList: [
      {
        id: 1,
        alt: "teste",
        url: "/projeto01-01.png",
      },
      {
        id: 2,
        alt: "teste2",
        url: "/projeto01-02.png",
      },
      {
        id: 3,
        alt: "teste2",
        url: "/projeto01-03.png",
      },
      {
        id: 4,
        alt: "teste2",
        url: "/projeto01-04.png",
      },
    ],
  },
  {
    id: 4,
    title: "Projeto 2",
    description:
      "Lorem ipsum dolor sit amet consectetur. Sed justo in maecenas elementum dignissim. Ultrices non duis velit tempus felis. Volutpat cursus varius tellus nisl commodo augue elit malesuada.",
    imgList: [
      {
        id: 1,
        alt: "teste",
        url: "/projeto01-01.png",
      },
      {
        id: 2,
        alt: "teste2",
        url: "/projeto01-02.png",
      },
      {
        id: 3,
        alt: "teste2",
        url: "/projeto01-03.png",
      },
      {
        id: 4,
        alt: "teste2",
        url: "/projeto01-04.png",
      },
    ],
  },

] as iPortifolioContentProps[] ;
