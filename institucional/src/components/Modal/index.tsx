import { ArrowLeft, ArrowRight } from "phosphor-react";
import { Dispatch, SetStateAction, useState } from "react";
import Modal from "react-modal";
import {
  StyledButtonCloseModal,
  StyledControlers,
  StyledImageContainer,
} from "./styled";

interface IModalPortfolio {
  isModalActive: boolean;
  setIsModalActive: Dispatch<SetStateAction<boolean>>;
  title: string;
  description: string;
  imgList: {
    id: number;
    alt: string;
    url: string;
  }[];
}

export function ModalPortfolio(props: IModalPortfolio) {
  const { title, description, imgList, isModalActive, setIsModalActive } =
    props;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const FIRST_IMAGE_INDEX = 0;
  const LAST_IMAGE_INDEX = imgList.length - 1;

  function handleCloseModalPortfolio() {
    setIsModalActive(false);
    setCurrentImageIndex(0);
  }

  function handleBackPage() {
    if (currentImageIndex === FIRST_IMAGE_INDEX) {
      return;
    }
    setCurrentImageIndex(currentImageIndex - 1);
  }

  function handleNextPage() {
    if (currentImageIndex === LAST_IMAGE_INDEX) {
      return;
    }
    setCurrentImageIndex(currentImageIndex + 1);
  }

  return (
    <Modal
      isOpen={isModalActive}
      overlayClassName="react-modal-overlay"
      onRequestClose={handleCloseModalPortfolio}
      className="react-modal-content"
    >
      <StyledButtonCloseModal
        type="button"
        className="closeModal"
        onClick={handleCloseModalPortfolio}
      >
        <ArrowLeft size={24} />
        Voltar
      </StyledButtonCloseModal>

      <header>
        <h2 className="Title">{title}</h2>
        <span className="description">{description}</span>
      </header>

      <StyledImageContainer className="imageContainer">
        <img src={imgList[currentImageIndex].url} alt="" />

        <StyledControlers className="controlers">
          <button
            type="button"
            className={`previousImage ${
              currentImageIndex === 0 ? "disabled" : "eneabled"
            }`}
            onClick={handleBackPage}
          >
            <ArrowLeft size={24} />
            Anterior
          </button>

          <span className="pageIndicators">
            {currentImageIndex + 1} de {imgList.length}
          </span>

          <button
            type="button"
            className={`nextImage ${
              currentImageIndex === imgList.length - 1 ? "disabled" : "eneabled"
            }`}
            onClick={handleNextPage}
          >
            Próxima
            <ArrowRight size={20} />
          </button>
        </StyledControlers>
      </StyledImageContainer>
    </Modal>
  );
}
