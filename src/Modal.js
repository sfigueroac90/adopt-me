/* eslint-disable no-undef */
import React from "react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  const ellRef = useRef(null);
  if (!ellRef.current) {
    ellRef.current = document.createElemente("div");
  }

  useEffect(() => {
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>);
};

export default Modal;
