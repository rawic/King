import Transaction from 'components/molecules/Transaction/Transaction'
import PropTypes from 'prop-types'
import React from 'react'

import { StyledTransactionsList } from './TransactionsList.styles'

const TransactionsList = ({ transactions, categories }) => {
  return (
    <StyledTransactionsList layout="position">
      {transactions.map((transaction) => {
        const total = transaction.total - transaction.amount
        const category = categories.find(category => category.id === transaction.category)

        return <Transaction transaction={transaction} category={category} total={total} key={transaction.id} />
      })}
    </StyledTransactionsList>
  )
}

TransactionsList.propTypes = {
  transactions: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired
}

export default TransactionsList
