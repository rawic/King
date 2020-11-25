import fetchCategories from 'api/fetchCategories'
import fetchTransactions from 'api/fetchTransactions'
import AddTransaction from 'components/molecules/Transaction/AddTransaction/AddTransaction'
import TransactionsList from 'components/molecules/TransactionsList/TransactionsList'
import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTransactionsFromDay } from 'utilities'

import { StyledSectionHeader, StyledSectionTitle } from './Transactions.styles'

const Transactions = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTransactions())
    dispatch(fetchCategories())
  }, [])

  const [transactions, categories, isLoading] = useSelector((state) => {
    const { transactions: { transactions }, categories: { categories }, search } = state
    const { filterBy, value } = search

    const isLoading = state.categories.loading || state.transactions.loading

    if (transactions.length < 0) return []

    return [
      transactions
        .filter(
          (t) => t.title.toLowerCase().includes(value.toLowerCase()) && t.type.includes(filterBy)
        )
        .sort((a, b) => new Date(b.time) - new Date(a.time)), categories, isLoading
    ]
  })

  const lastTransactions = getTransactionsFromDay(transactions, '2020-05-13')
  const secondLastTransactions = getTransactionsFromDay(transactions, '2020-05-12')

  return !isLoading && (
    <motion.div layout>
      <StyledSectionHeader layout>
        <StyledSectionTitle>Today</StyledSectionTitle>

        <AddTransaction />
      </StyledSectionHeader>

      <TransactionsList transactions={lastTransactions} categories={categories} />

      <StyledSectionHeader layout>
        <StyledSectionTitle>Yesterday</StyledSectionTitle>
      </StyledSectionHeader>

      <TransactionsList transactions={secondLastTransactions} categories={categories} />
    </motion.div>
  )
}

export default Transactions
