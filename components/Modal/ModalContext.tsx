import React from "react";

interface ModalContextType {
  hourError: boolean;
  numberError: boolean;
  serverError: boolean;
  openModal(tag: ModalTagType): void;
  closeModal(): void;
}
type ModalStateType = Omit<ModalContextType, "openModal" | "closeModal">;
type ModalTagType = keyof ModalStateType;

const ModalContext = React.createContext<ModalContextType | null>(null);

const falsyState: ModalStateType = {
  hourError: false,
  numberError: false,
  serverError: false,
};

export const ModalProvider: React.FC = ({ children }) => {
  const [modalState, setModalState] =
    React.useState<ModalStateType>(falsyState);

  const openModal = (tag: ModalTagType) => {
    setModalState({
      ...falsyState,
      [tag]: true,
    });
  };
  const closeModal = () => {
    setModalState({
      ...falsyState,
    });
  };
  return (
    <ModalContext.Provider
      value={{
        ...modalState,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => {
  const context = React.useContext(ModalContext);
  if (!context) {
    throw new Error("useModalContext must be used within a ModalProvider");
  }
  return context;
};
