import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Badge from 'components/atoms/Badge/Badge'
import { ListItemWrapper } from 'components/molecules/ListItem/ListItem.styles'
import { motion } from 'framer-motion'
import styled from 'styled-components'

export const StyledWrapper = styled(motion.article)`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 3.7rem;
  position: relative;
`

export const StyledListItem = styled(ListItemWrapper)`
  max-width: 330px;
  width: 100%;
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
