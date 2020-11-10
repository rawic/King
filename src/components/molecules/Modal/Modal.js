import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ModalContext } from 'context/modalContext'
import React, { useContext } from 'react'

import { StyledCloseBtn, StyledModal, StyledOverlay } from './Modal.styles'

const Modal = () => {
  const { isModalOpen, handleModal, modalContent } = useContext(ModalContext)

  if (isModalOpen) {
    return (
      <>
        <StyledOverlay />
        <StyledModal>
          <StyledCloseBtn onClick={() => handleModal()}>
            <FontAwesomeIcon icon="times" />
          </StyledCloseBtn>

          {modalContent}
        </StyledModal>
      </>
    )
  } else {
    return null
  }
}

export default Modal
