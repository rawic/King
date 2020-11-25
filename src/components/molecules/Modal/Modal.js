import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ModalContext } from 'context/modalContext'
import { AnimatePresence } from 'framer-motion'
import useOutsideClick from 'hooks/useOutsideClick'
import React, { useContext, useRef } from 'react'

import { StyledCloseBtn, StyledHeading, StyledModal, StyledOverlay } from './Modal.styles'

const Modal = () => {
  const { isModalOpen, handleModal, modalContent } = useContext(ModalContext)
  const { title, content: Content } = modalContent || {}
  const wrapperRef = useRef(null)

  useOutsideClick(wrapperRef, () => handleModal())

  return (
    <AnimatePresence>
      {isModalOpen && (
        <StyledOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.1 } }}
          exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
          <StyledModal
            initial={{ y: 'calc(-50% - 50px)', x: '-50%' }}
            animate={{ y: '-50%', x: '-50%', transition: { duration: 0.1 } }}
            exit={{ y: 'calc(-50% - 50px)', x: '-50%', transition: { duration: 0.1 } }}
            ref={wrapperRef}
          >
            <StyledCloseBtn onClick={() => handleModal()}>
              <FontAwesomeIcon icon="times" />
            </StyledCloseBtn>

            <StyledHeading weight="extraBold">{title}</StyledHeading>
            <Content />
          </StyledModal>
        </StyledOverlay>
      )}
    </AnimatePresence>
  )
}

export default Modal
