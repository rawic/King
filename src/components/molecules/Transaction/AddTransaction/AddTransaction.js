import Button from 'components/atoms/Button/Button'
import Input from 'components/atoms/Input/Input'
import { ModalContext } from 'context/modalContext'
import React, { useContext, useState } from 'react'
import { addTransaction } from 'redux/actions/transactionActions'
import { store } from 'redux/store'
import styled from 'styled-components'
import { filterAmount, formatDate } from 'utilities'
import { v4 as uuidv4 } from 'uuid'

const StyledSectionButton = styled(Button)`
  margin-bottom: 2.7rem;
`

const transactionPlaceholder = {
  amount: 0,
  category: '',
  time: '',
  title: '',
  type: 'income',
  total: 0
}

const AddTransactionForm = () => {
  const [transaction, setTransaction] = useState(transactionPlaceholder)

  const handleChange = (e) => {
    const { name, value } = e.target

    console.log(formatDate(new Date()))

    setTransaction({
      ...transaction,
      [name]: value
    })
  }

  const addTransation = (e) => {
    e.preventDefault()

    const { title, type, amount } = transaction
    const newTransaction = {
      id: uuidv4(),
      amount,
      category: 3,
      time: '2020-05-13 23:59',
      title,
      type,
      total: parseFloat(3091.51) + amount
    }

    return store.dispatch(addTransaction(newTransaction))
  }

  return (
    <form action="">
      <Input
        placeholder="Netflix subscription"
        name="title"
        id="transaction_type"
        label="Transaction name"
        value={transaction.name}
        onChange={handleChange}
      />
      <Input
        placeholder="Select transaction category"
        name="category"
        id="transaction_category"
        label="Transaction category"
        value={transaction.category}
        onChange={handleChange}
      />
      <Input
        placeholder={filterAmount(2345.32)}
        name="amount"
        id="transaction_amount"
        label="Transaction amount"
        value={transaction.amount}
        onChange={handleChange}
      />

      <select name="type" id="" value={transaction.type} onChange={handleChange}>
        <option value="income">Income</option>
        <option value="outcome">Outcome</option>
      </select>

      <Button color="#CBD4E3">Cancel</Button>
      <Button icon="angle-right" onClick={addTransation}>
        New transaction
      </Button>
    </form>
  )
}

const AddTransaction = () => {
  const { handleModal } = useContext(ModalContext)

  return (
    <StyledSectionButton
      icon="angle-right"
      onClick={() => handleModal({ title: 'Add new transaction', content: AddTransactionForm })}
    >
      New transaction
    </StyledSectionButton>
  )
}

export default AddTransaction
