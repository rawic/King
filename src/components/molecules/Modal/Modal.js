import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { BodyScrollOptions } from 'body-scroll-lock'
import { clearAllBodyScrollLocks, disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { ModalContext } from 'context/modalContext'
import { AnimatePresence } from 'framer-motion'
import useOutsideClick from 'hooks/useOutsideClick'
import React, { useContext, useEffect, useRef } from 'react'

import {
  ModalTransition,
  StyledCloseBtn,
  StyledHeading,
  StyledModal,
  StyledOverlay
} from './Modal.styles'

const options: BodyScrollOptions = {
  reserveScrollBarGap: true
}

const Modal = () => {
  const { isModalOpen, handleModal, modalContent } = useContext(ModalContext)
  const { title, content: Content } = modalContent || {}
  const wrapperRef = useRef(null)

  useOutsideClick(wrapperRef, () => handleModal())

  useEffect(() => {
    isModalOpen && disableBodyScroll('document.body', options)
    !isModalOpen && enableBodyScroll('document.body')
    return () => clearAllBodyScrollLocks()
  }, [isModalOpen])

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
            animate={ModalTransition.show}
            exit={ModalTransition.hide}
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
