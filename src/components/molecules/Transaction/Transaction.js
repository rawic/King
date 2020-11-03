import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Badge from 'components/atoms/Badge/Badge'
import Paragraph from 'components/atoms/Paragraph/Paragraph'
import Dropdown from 'components/molecules/Dropdown/Dropdown'
import PropTypes from 'prop-types'
import React from 'react'
import { removeTransaction } from 'redux/actions'
import { store } from 'redux/store'
import styled from 'styled-components'
import { filterAmount } from 'utilities'

const handleTransactionAction = (id) => (action) => {
  const actionType = action.toLowerCase()
  if (actionType === 'remove') {
    return store.dispatch(removeTransaction(id))
  }
}

const StyledWrapper = styled.article`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 3.7rem;
`

const StyledCategoryIconCircle = styled.div`
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

const StyledHeader = styled.header`
  align-items: center;
  display: flex;
  line-height: 1.35;
  max-width: 330px;
  width: 100%;
`

const StyledHeading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.m};
`

const StyledTime = styled.span`
  align-items: center;
  color: ${({ theme }) => theme.secondary};
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.s};
`

const StyledClock = styled(FontAwesomeIcon)`
  font-size: 2rem;
  margin-right: 1rem;
`

const StyledBadge = styled(Badge)`
  border-radius: 1.2rem;
  justify-content: center;
  padding-left: 0;
  padding-right: 0;
  white-space: nowrap;
  width: 95px;
`

const StyledArrowButton = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 0;

  &:focus {
    color: ${({ theme }) => theme.tertiary};
    outline: none;
  }
`

const StyledTotalAmount = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  width: 85px;
`

export const searchFilterOptions = [
  { label: 'Edit', value: 'edit', icon: { name: 'pen', color: '#3160FF' } },
  { label: 'Remove', value: 'remove', icon: { name: 'trash', color: '#FF4883' } }
]

const ActionButton = ({ handleDropdownClick }) => (
  <StyledArrowButton onClick={handleDropdownClick}>
    <FontAwesomeIcon icon="angle-down" />
  </StyledArrowButton>
)

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
        options={searchFilterOptions}
        onChange={handleTransactionAction(id)}
      />
    </StyledWrapper>
  )
}

ActionButton.propTypes = {
  handleDropdownClick: PropTypes.func.isRequired
}

Transaction.propTypes = {
  transaction: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired
}

export default Transaction
