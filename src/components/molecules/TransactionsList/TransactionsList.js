import Transaction from 'components/molecules/Transaction/Transaction'
import PropTypes from 'prop-types'
import React from 'react'
import Skeleton from 'skeleton/Skeleton'

import { StyledTransactionsList } from './TransactionsList.styles'

const TransactionsList = ({ transactions, categories }) => {
  return (
    <StyledTransactionsList layout="position">
      {transactions.length > 0 &&
        categories.length > 0 &&
        transactions.map((transaction) => {
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

      {(!transactions.length || !categories.length) && (
        <Skeleton>
          {[...Array(5).keys()].map((i) => (
            <Skeleton.Transaction key={i} />
          ))}
        </Skeleton>
      )}
    </StyledTransactionsList>
  )
}

TransactionsList.propTypes = {
  transactions: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired
}

export default TransactionsList
