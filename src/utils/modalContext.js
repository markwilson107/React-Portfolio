import React from "react";
import useModal from "./useModal";
import Modal from "../components/Modal";

let ModalContext;
let { Provider } = (ModalContext = React.createContext());

let ModalProvider = ({ children }) => {
  let { modal, handleModal, modalType , modalSrc } = useModal();
  return (
    <Provider value={{ modal, handleModal, modalType, modalSrc }}>
      <Modal />
      {children}
    </Provider>
  );
};

export { ModalContext, ModalProvider };

