import Loader from 'components/atoms/Loader/Loader'
import Transaction from 'components/molecules/Transaction/Transaction'
import PropTypes from 'prop-types'
import React from 'react'

import { StyledTransactionsList } from './TransactionsList.styles'

const TransactionsList = ({ transactions, categories, isLoading }) => {
  if (isLoading) return <Loader />

  return (
    <StyledTransactionsList layout="position">
      {transactions.map((transaction) => {
        const total = transaction.total - transaction.amount
        const category = categories.find((category) => category.id === transaction.category)

        return (
          <Transaction
            transaction={transaction}
            category={category}
            total={total}
            key={transaction.id}
          />
        )
      })}
    </StyledTransactionsList>
  )
}

TransactionsList.propTypes = {
  transactions: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default TransactionsList
