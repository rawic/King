import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dropdown from 'components/molecules/Dropdown/Dropdown'
import ListItem from 'components/molecules/ListItem/ListItem'
import PropTypes from 'prop-types'
import React from 'react'
import { filterAmount } from 'utilities'

import ActionButton from './ActionButton/ActionButton'
import {
  StyledBadge,
  StyledClock,
  StyledListItem,
  StyledTime,
  StyledTotalAmount,
  StyledWrapper
} from './Transaction.styles'
import { handleTransactionAction, transactionActions } from './Transaction.utils'

const Transaction = ({ transaction = {}, category = {}, total = 0 }) => {
  const { amount, id, time, title, type } = transaction
  const { name, icon, color } = category

  const transactionTime = time.split(' ')[1]
  const totalAmount = total + amount

  return (
    <StyledWrapper layout="position">
      <StyledListItem as="header">
        <ListItem.Avatar color={color}>
          <FontAwesomeIcon icon={icon} />
        </ListItem.Avatar>
        <ListItem.Content>
          <ListItem.Heading>{title}</ListItem.Heading>
          <ListItem.Text big>{name}</ListItem.Text>
        </ListItem.Content>
      </StyledListItem>

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
  transaction: PropTypes.object,
  category: PropTypes.object,
  total: PropTypes.number
}

export default Transaction
