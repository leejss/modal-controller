import React from "react";
import Portal from "../Portal";
import { Modal, ModalCard } from "./Modal";
import { useModalContext } from "./ModalContext";

const ModalViewer = () => {
  const { closeModal, hourError, numberError, openModal, serverError } =
    useModalContext();
  return (
    <Portal>
      {hourError && (
        <Modal>
          <ModalCard>
            Hour Error
            <button onClick={closeModal}>close</button>
            <button onClick={() => openModal("numberError")}>
              Number Error
            </button>
            <button onClick={() => openModal("serverError")}>
              Server Error
            </button>
            <button onClick={() => openModal("hourError")}>Hour Error</button>
          </ModalCard>
        </Modal>
      )}
      {numberError && (
        <Modal>
          <ModalCard>
            Number Error
            <button onClick={closeModal}>close</button>
            <button onClick={() => openModal("numberError")}>
              Number Error
            </button>
            <button onClick={() => openModal("serverError")}>
              Server Error
            </button>
            <button onClick={() => openModal("hourError")}>Hour Error</button>
          </ModalCard>
        </Modal>
      )}
      {serverError && (
        <Modal>
          <ModalCard>
            Server Error
            <button onClick={closeModal}>close</button>
            <button onClick={() => openModal("numberError")}>
              Number Error
            </button>
            <button onClick={() => openModal("serverError")}>
              Server Error
            </button>
            <button onClick={() => openModal("hourError")}>Hour Error</button>
          </ModalCard>
        </Modal>
      )}
    </Portal>
  );
};

export default ModalViewer;
