import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Paragraph from 'components/atoms/Paragraph/Paragraph'
import PropTypes from 'prop-types'
import React from 'react'
import { filterAmount, filterPercentages } from 'utilities'

import { StyledAmount, StyledBalanceAmount, StyledBalanceCard, StyledIconCircle, StyledWrapper } from './BalanceCard.styles'
import cardTypes from './types'

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
