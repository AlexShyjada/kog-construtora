import Image from "next/image";
import { ModalPortfolio } from "../Modal";
import { useState } from "react";

interface IPortfolioCard {
  title: string;
  description: string;
  imgList: {
    id: 1;
    alt: string;
    url: string;
  }[];
}

export function PortfolioCard(props: IPortfolioCard) {
  const [isModalActive, setIsModalActive] = useState(false);

  const { title, description, imgList } = props;

  return (
    <div className="portifolioCard">
      {isModalActive ? (
        <ModalPortfolio
          isModalActive={isModalActive}
          setIsModalActive={setIsModalActive}
          description={description}
          title={title}
          imgList={imgList}
        />
      ) : (
        ""
      )}
      <figure className="figure">
        <Image alt={title} src={imgList[0].url} fill />
      </figure>

      <div className="contentContainer">
        <div className="textContainer">
          <h3> {title} </h3>
          <p className="portfolioCardDescription">{description}</p>
        </div>
        <a onClick={() => setIsModalActive(!isModalActive)}>Saiba mais</a>
      </div>
    </div>
  );
}
