import Image from "next/image";
import { ArrowLeft } from "phosphor-react";
import { StyledImageItem, StyledModal } from "./styled";
import { Dispatch, SetStateAction, useState } from "react";

interface IModalPortfolio {
  isModalActive: boolean;
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
  title: string;
  description: string;
  imgList: {
    id: 1;
    alt: string;
    url: string;
  }[];
}

export function ModalPortfolio(props: IModalPortfolio) {
  const { title, description, imgList, isModalActive, setIsModalActive } =
    props;

  const [whatImageIsActive, setWhatImageIsActive] = useState(imgList[0].url);

  return (
    <StyledModal>
      <div className="container">
        <button
          onClick={() => setIsModalActive(!isModalActive)}
          className="closeModal"
        >
          <ArrowLeft size={24} /> Voltar
        </button>

        <main className="mainContent">
          <header className="header">
            <h2 className="secundaryTitle">{title}</h2>
            <p className="description">{description}</p>
          </header>

          <div className="imageContainer">
            <figure className="mainFigure">
              <Image fill alt="" src={whatImageIsActive} />
            </figure>

            <div className="gridImages">
              {imgList.map((image) => (
                <StyledImageItem
                  className="imageItem"
                  key={image.id}
                  onClick={() => setWhatImageIsActive(image.url)}
                  isImageActive = {whatImageIsActive === image.url ? true : false}
                >
                  <Image fill alt={image.alt} src={image.url} />
                </StyledImageItem>
              ))}
            </div>
          </div>
        </main>
      </div>
    </StyledModal>
  );
}
