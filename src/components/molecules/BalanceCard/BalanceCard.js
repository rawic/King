import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Paragraph from 'components/atoms/Paragraph/Paragraph'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'
import { filterAmount, filterPercentages } from 'utilities'

import cardTypes from './types'

const StyledBalanceCard = styled.div`
  background-color: ${({ color }) => color};
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  height: 143px;
  justify-content: space-between;
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  width: 300px;
  line-height: 1.25;
`

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;

  ${({ spaceBetween }) =>
    spaceBetween &&
    css`
      justify-content: space-between;
    `}
`

const StyledIconCircle = styled.div`
  align-items: center;
  background-color: ${({ colors }) => colors.iconBg};
  border-radius: 50%;
  color: ${({ colors }) => colors.highlight};
  display: flex;
  font-size: ${({ small, theme }) => (small ? theme.fontSize.xxs : theme.fontSize.xl)};
  height: ${({ small }) => (small ? '20px' : '53px')};
  justify-content: center;
  margin-right: ${({ small }) => (small ? '.7rem' : '1.5rem')};
  width: ${({ small }) => (small ? '20px' : '53px')};
`

const StyledAmount = styled.p`
  font-size: 2.2rem;
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
`

const StyledBalanceAmount = styled.span`
  color: ${({ color }) => color};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
`

const BalanceCard = ({ balance, type, children }) => {
  const { arrowIcon: arrow, colors, icon, text } = cardTypes[type]

  return (
    <StyledBalanceCard color={colors.bg}>
      <StyledWrapper>
        <StyledIconCircle colors={colors}>
          <FontAwesomeIcon icon={icon} />
        </StyledIconCircle>
        <div>
          <StyledAmount>{filterAmount(balance.amount)}</StyledAmount>
          <Paragraph>{text}</Paragraph>
        </div>
      </StyledWrapper>
      <StyledWrapper spaceBetween>
        <Paragraph>{children}</Paragraph>
        <StyledWrapper>
          <StyledIconCircle colors={colors} small>
            <FontAwesomeIcon icon={arrow} />
          </StyledIconCircle>
          <StyledBalanceAmount color={colors.highlight}>
            {filterPercentages(balance.percentage)}
          </StyledBalanceAmount>
        </StyledWrapper>
      </StyledWrapper>
    </StyledBalanceCard>
  )
}

BalanceCard.propTypes = {
  balance: PropTypes.object.isRequired,
  children: PropTypes.string,
  type: PropTypes.string.isRequired
}

BalanceCard.defaultProps = {
  children: ''
}

export default BalanceCard
