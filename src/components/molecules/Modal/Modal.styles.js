import Heading from 'components/atoms/Heading/Heading'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledOverlay = styled(motion.div)`
  background-color: hsla(217, 31.2%, 68.6%, 40%);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;
`

export const StyledModal = styled(motion.section)`
  background-color: white;
  border-radius: 0.8rem;
  left: 50%;
  min-height: 200px;
  overflow: hidden;
  padding: 2.5rem 3rem;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 80rem;
  z-index: 10;
`

export const StyledCloseBtn = styled.button`
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

export const StyledHeading = styled(Heading)`
  margin-bottom: 3rem;
`

export const ModalTransition = {
  show: {
    y: '-50%',
    x: '-50%',
    transition: { duration: 0.1 }
  },
  hide: {
    y: 'calc(-50% - 50px)',
    x: 'calc(-50% + 8px)',
    transition: { y: { duration: 0.1 }, x: { duration: 0 } }
  }
}
