import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledFilterButton = styled(motion.button)`
  align-items: center;
  background-color: ${({ theme }) => theme.highlight};
  border-radius: 0.6rem;
  border: 0;
  color: white;
  display: inline-flex;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  padding: 0.5rem 2.4rem 0.5rem 1.5rem;

  &:focus {
    background-color: ${({ theme }) => theme.highlightDarker};
    outline: none;
  }
`

export const StyledIconWrapper = styled(motion.span)`
  position: absolute;
  top: 8px;
  right: 10px;
  width: 0.875rem;
  height: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
`
