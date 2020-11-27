import Transaction from 'components/molecules/Transaction/Transaction'
import PropTypes from 'prop-types'
import React from 'react'
import Skeleton from 'skeletons/Skeleton'

import { StyledTransactionsList } from './TransactionsList.styles'

const TransactionsList = ({ transactions, categories, isLoading }) => {
  return (
    <StyledTransactionsList layout="position">
      {!isLoading &&
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

      {isLoading && (
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
  categories: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default TransactionsList
