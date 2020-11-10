import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Paragraph from 'components/atoms/Paragraph/Paragraph'
import Dropdown from 'components/molecules/Dropdown/Dropdown'
import PropTypes from 'prop-types'
import React from 'react'
import { filterAmount } from 'utilities'

import ActionButton from './ActionButton/ActionButton'
import {
  StyledBadge,
  StyledCategoryIconCircle,
  StyledClock,
  StyledHeader,
  StyledHeading,
  StyledTime,
  StyledTotalAmount,
  StyledWrapper
} from './Transaction.styles'
import { handleTransactionAction, transactionActions } from './Transaction.utils'

const Transaction = ({ transaction, total }) => {
  const { amount, category, id, time, title, type } = transaction
  const { color, icon, name } = category

  const transactionTime = time.split(' ')[1]
  const totalAmount = total + amount

  return (
    <StyledWrapper>
      <StyledHeader>
        <StyledCategoryIconCircle color={color}>
          <FontAwesomeIcon icon={icon} />
        </StyledCategoryIconCircle>

        <div>
          <StyledHeading>{title}</StyledHeading>
          <Paragraph big>{name}</Paragraph>
        </div>
      </StyledHeader>

      <StyledBadge type={type} transaction>
        {filterAmount(amount, true)}
      </StyledBadge>

      <StyledTime>
        <StyledClock icon={['far', 'clock']} />
        {transactionTime}
      </StyledTime>

      <StyledTotalAmount>{filterAmount(totalAmount, false, ' ')}</StyledTotalAmount>

      <Dropdown
        content=""
        trigger={ActionButton}
        options={transactionActions}
        onChange={handleTransactionAction(id)}
      />
    </StyledWrapper>
  )
}

Transaction.propTypes = {
  transaction: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired
}

export default Transaction
