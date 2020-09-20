import Transaction from 'components/molecules/Transaction/Transaction'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledTransactionsList = styled.section``

const transactions = [
  {
    id: 1,
    amount: 45,
    category: {
      color: '#3160FF',
      icon: 'wallet',
      name: 'Family'
    },
    time: '23:42',
    title: 'Pocket money',
    type: 'income'
  },
  {
    id: 2,
    amount: 1215,
    category: {
      color: '#82C91E',
      icon: 'briefcase',
      name: 'Career'
    },
    time: '23:32',
    title: 'Job',
    type: 'income'
  },
  {
    id: 3,
    amount: -15.49,
    category: {
      color: '#FF4883',
      icon: 'couch',
      name: 'Entertainment'
    },
    time: '15:32',
    title: 'Netflix subscription',
    type: 'outcome'
  },
  {
    id: 4,
    amount: 25,
    category: {
      color: '#FF9066',
      icon: 'coins',
      name: 'Casual'
    },
    time: '12:21',
    title: 'Mowing neighbor\'s grass',
    type: 'income'
  },
  {
    id: 5,
    amount: -115,
    category: {
      color: '#FFCD41',
      icon: 'utensils',
      name: 'Lifestyle'
    },
    time: '07:14',
    title: 'McDonald\'s',
    type: 'outcome'
  }
]

const TransactionsList = ({ total }) => (
  <StyledTransactionsList>
    {transactions.map((transaction) => (
      <Transaction transaction={transaction} total={total} key={transaction.id} />
    ))}
  </StyledTransactionsList>
)

TransactionsList.propTypes = {
  total: PropTypes.number.isRequired
}

export default TransactionsList
