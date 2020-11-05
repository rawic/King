import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Heading from 'components/atoms/Heading/Heading'
import { ModalContext } from 'context/modalContext'
// import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import styled from 'styled-components'

const StyledOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(217, 31.2%, 68.6%, 40%);
  z-index: 9;
`

const StyledModal = styled.section`
  width: 80rem;
  background-color: white;
  padding: 2.5rem 3rem;
  border-radius: 0.8rem;
  overflow: hidden;
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 200px;
`

const StyledCloseBtn = styled.button`
  align-items: center;
  background: transparent;
  border: 0;
  color: #b3b3b3;
  display: flex;
  font-size: 2.2rem;
  height: 2.2rem;
  padding: 0;
  position: absolute;
  right: 2.8rem;
  top: 2.8rem;
`

const Modal = () => {
  const { isModalOpen, handleModal, modalContent } = useContext(ModalContext)

  // const Component = modalContent

  // console.log(modalContent)

  if (isModalOpen) {
    return (
      <>
        <StyledOverlay />
        <StyledModal>
          <StyledCloseBtn onClick={() => handleModal()}>
            <FontAwesomeIcon icon="times" />
          </StyledCloseBtn>
          {modalContent}

          {/* <Heading weight="extraBold">{title}</Heading> */}
          {/* {modalContent && <Component />} */}
        </StyledModal>
      </>
    )
  } else {
    return null
  }
}

export default Modal
