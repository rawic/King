import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledSectionHeader = styled(motion.header)`
  align-items: center;
  border-bottom: 1px solid #f2faff;
  display: flex;
  justify-content: space-between;
  margin-top: 3.5rem;
  position: relative;
`

export const StyledSectionTitle = styled.span`
  color: ${({ theme }) => theme.secondary};
  padding-bottom: 2.7rem;
  position: relative;
  text-transform: uppercase;

  &::after {
    content: '';
    background-color: ${({ theme }) => theme.highlight};
    bottom: -8px;
    height: 0.8rem;
    left: 0;
    position: absolute;
    width: 100%;
  }
`
