import * as Styled from "./ModalTemplate.style";
import { ModalProps } from "./ModalTemplate.types";

const ModalTemplate = ({ showModal, onRequestClose, children }: ModalProps) => {
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

export default ModalTemplate;