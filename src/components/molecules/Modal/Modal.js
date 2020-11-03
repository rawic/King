import Heading from 'components/atoms/Heading/Heading'
import PropTypes from 'prop-types'
import React from 'react'
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

const Modal = ({ title, children }) => (
  <>
    <StyledOverlay />
    <StyledModal>
      <Heading weight="extraBold">{title}</Heading>
      {children}
    </StyledModal>
  </>
)

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.elementType
}

export default Modal
