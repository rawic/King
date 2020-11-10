import AddTransaction from 'components/molecules/Transaction/AddTransaction/AddTransaction'
import TransactionsList from 'components/molecules/TransactionsList/TransactionsList'
import React from 'react'
import { useSelector } from 'react-redux'

import { StyledSectionHeader, StyledSectionTitle } from './Transactions.styles'

const Transactions = () => {
  const transactions = useSelector((state) => {
    const { search, transactions } = state
    const { filterBy, value } = search

    return [
      ...transactions
        .filter(
          (t) => t.title.toLowerCase().includes(value.toLowerCase()) && t.type.includes(filterBy)
        )
        .sort((a, b) => new Date(b.time) - new Date(a.time))
    ]
  })

  const dates = [...new Set(transactions.map((t) => t.time.split(' ')[0]))].slice(0, 2)

  const getTransactionsFromDay = (day) => {
    return transactions.filter((t, i) => t.time.split(' ')[0] === dates[day]).slice(0, 5)
  }

  const lastTransactions = getTransactionsFromDay(0)
  const secondLastTransactions = getTransactionsFromDay(1)

  return (
    <>
      <StyledSectionHeader>
        <StyledSectionTitle>Today</StyledSectionTitle>

        <AddTransaction />
      </StyledSectionHeader>

      <TransactionsList transactions={lastTransactions} />

      <StyledSectionHeader>
        <StyledSectionTitle>Yesterday</StyledSectionTitle>
      </StyledSectionHeader>

      <TransactionsList transactions={secondLastTransactions} />
    </>
  )
}

export default Transactions
