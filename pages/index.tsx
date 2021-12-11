import React from "react";
import { useModalContext } from "../components/Modal/ModalContext";

const HomePage = () => {
  const { openModal } = useModalContext();
  const handleClick = () => {
    openModal("hourError");
  };
  return (
    <div>
      <button onClick={handleClick}>Hour Error</button>
    </div>
  );
};

export default HomePage;
