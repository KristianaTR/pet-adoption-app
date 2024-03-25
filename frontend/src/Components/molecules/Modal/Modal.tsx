import * as Styled from "./Modal.style";
import { ModalProps } from "./Modal.types";

const Modal = ({ showModal, onRequestClose, children }: ModalProps) => {
  return (
    <>
      {showModal ? (
        <Styled.ModalBackground onClick={onRequestClose}>
          <Styled.ModalBody onClick={(e) => e.stopPropagation()}>
            <button onClick={onRequestClose}>Close Modal</button>
            {children}
          </Styled.ModalBody>
        </Styled.ModalBackground>
      ) : (
        false
      )}
    </>
  );
};

export default Modal;