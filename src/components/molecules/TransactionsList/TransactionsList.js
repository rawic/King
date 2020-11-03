import Transaction from 'components/molecules/Transaction/Transaction'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledTransactionsList = styled.section`
  padding-bottom: 2rem;
`

const TransactionsList = ({ transactions }) => {
  return (
    <StyledTransactionsList>
      {transactions.map((transaction) => {
        const total = transaction.total - transaction.amount

        return <Transaction transaction={transaction} total={total} key={transaction.id} />
      })}
    </StyledTransactionsList>
  )
}

TransactionsList.propTypes = {
  transactions: PropTypes.array.isRequired
}

export default TransactionsList
