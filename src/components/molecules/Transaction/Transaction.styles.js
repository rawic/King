import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Badge from 'components/atoms/Badge/Badge'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledWrapper = styled(motion.article)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 3.7rem;
  position: relative;
`

export const StyledCategoryIconCircle = styled.div`
  align-items: center;
  border-radius: 50%;
  border: 1px solid hsl(0, 0%, 92.2%);
  box-shadow: 0px 0px 16px hsla(0, 0%, 0%, 0.07);
  box-sizing: border-box;
  color: ${({ color }) => color};
  display: flex;
  font-size: 2.4rem;
  height: 4.8rem;
  justify-content: center;
  margin-right: 1.6rem;
  width: 4.8rem;
`

export const StyledHeader = styled(motion.header)`
  align-items: center;
  display: flex;
  line-height: 1.35;
  max-width: 330px;
  width: 100%;
`

export const StyledHeading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
`

export const StyledTime = styled.span`
  align-items: center;
  color: ${({ theme }) => theme.secondary};
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.s};
`

export const StyledClock = styled(FontAwesomeIcon)`
  font-size: 2rem;
  margin-right: 1rem;
`

export const StyledBadge = styled(Badge)`
  border-radius: 1.2rem;
  justify-content: center;
  padding-left: 0;
  padding-right: 0;
  white-space: nowrap;
  width: 95px;
`

export const StyledTotalAmount = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  width: 85px;
`
