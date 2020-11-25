import Logo from 'components/atoms/Logo/Logo'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const StyledWrapper = styled.div`
  background-color: hsl(0, 0%, 100%);
  border-bottom-left-radius: 1.2rem;
  border-top-left-radius: 1.2rem;
  max-width: 250px;
  padding-bottom: 2.5rem;
  padding-top: 2.5rem;
  width: 100%;
`

export const StyledInnerWrapper = styled(motion.div)`
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  ${({ bottom }) =>
    bottom &&
    css`
      margin-bottom: ${({ bottom }) => `${bottom}rem`};
    `}
`

export const StyledLogo = styled(Logo)`
  margin-bottom: 6.3rem;
`
