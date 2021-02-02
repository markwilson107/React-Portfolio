import React from "react";

export default () => {
  let [modal, setModal] = React.useState(false);
  let [modalType, setModalType] = React.useState("");
  let [modalSrc, setModalSrc] = React.useState("");

  let handleModal = (type = false, src) => {
    setModal(!modal);
    if (type) {
      setModalType(type);
      setModalSrc(src);
    }
  };

  return { modal, handleModal, modalType, modalSrc };
};