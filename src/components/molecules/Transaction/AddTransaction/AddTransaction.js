/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'components/atoms/Button/Button'
import Input from 'components/atoms/Input/Input'
import Label from 'components/atoms/Label/Label'
import { DropdownList, DropdownMenu } from 'components/molecules/Dropdown2/Dropdown.styles'
import Dropdown2 from 'components/molecules/Dropdown2/Dropdown2'
import StyledOption from 'components/molecules/Dropdown2/Option/Option.styles'
import ListItem from 'components/molecules/ListItem/ListItem'
import { ModalContext } from 'context/modalContext'
import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { addTransaction } from 'redux/actions/transactionActions'
import { store } from 'redux/store'
import styled from 'styled-components'
import { filterAmount, formatDateWithTime } from 'utilities'
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

const ButtonWrapper = styled.div`
  text-align: right;
`

const StyledButton = styled(Button)`
  font-size: 1.4rem;
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  margin-bottom: 2rem;
  margin-right: 1.5rem;
  text-align: center;
  text-transform: none;
  width: 10rem;
  background-color: ${({ isActive, theme }) => (isActive ? theme.highlight : theme.secondary)};
  &:focus {
    outline: none;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.15);
  }
  &:hover {
    background-color: ${({ isActive, theme }) => (isActive ? theme.highlight : theme.secondary)};
  }
`

const CategoriesSelect = styled(Dropdown2)`
  ${DropdownMenu} {
    position: relative;
    box-shadow: none;
    &::after {
      position: absolute;
      bottom: 0;
      height: 100%;
      width: 100%;
      z-index: 0;
      content: '';
      background: linear-gradient(to top, rgba(255, 255, 255, 1) 11%, rgba(255, 255, 255, 0) 20%);
      pointer-events: none;
    }
  }
  ${DropdownList} {
    padding-bottom: 3rem;
  }
  ${StyledOption} {
    border-radius: 0.8rem;
    &:hover {
      background-color: rgba(248, 248, 248, 0.7);
    }
  }
  .active {
    color: ${({ theme }) => theme.highlight};
  }
`

const StyledInput = styled(Input)`
  margin-bottom: 2rem;
`

const AddTransactionForm = () => {
  const [transaction, setTransaction] = useState(transactionPlaceholder)
  const total = useSelector(({ balance }) => balance.total)
  const categories = useSelector(({ categories: { categories } }) => categories)

  const handleChange = (e) => {
    const { name, value } = e.target

    setTransaction({
      ...transaction,
      [name]: value
    })
  }

  const handleCategoryChange = (value) => {
    setTransaction({
      ...transaction,
      category: value
    })
  }

  const addTransation = (e) => {
    const { title, type, amount } = transaction

    const newTransaction = {
      id: uuidv4(),
      title,
      type,
      category: 3,
      amount,
      time: formatDateWithTime(new Date()),
      total: parseFloat(total) + amount
    }

    return store.dispatch(addTransaction(newTransaction))
  }

  const TransactionCategory = (
    <StyledInput
      placeholder="Select transaction category"
      name="category"
      id="transaction_category"
      label="Transaction category"
      value={transaction.category}
      onChange={handleChange}
      disabled="disabled"
    />
  )

  return (
    <form action="">
      <StyledInput
        placeholder="Netflix subscription"
        name="title"
        id="transaction_type"
        label="Transaction name"
        value={transaction.name}
        onChange={handleChange}
      />

      <Label>Transaction Type</Label>
      <StyledButton
        onClick={handleChange}
        name="type"
        value="income"
        isActive={transaction.type === 'income'}
      >
        Income
      </StyledButton>
      <StyledButton
        name="type"
        onClick={handleChange}
        value="outcome"
        isActive={transaction.type === 'outcome'}
      >
        Outcome
      </StyledButton>

      <CategoriesSelect trigger={TransactionCategory} onChange={handleCategoryChange} open>
        {categories.map(({ id, color, icon, name }) => (
          <CategoriesSelect.Option key={id} value={name}>
            <ListItem isActive={transaction.category === name}>
              <ListItem.Avatar color={color}>
                <FontAwesomeIcon icon={icon} />
              </ListItem.Avatar>
              <ListItem.Content>
                <ListItem.Heading>{name}</ListItem.Heading>
                <ListItem.Text big>Incomes from my job</ListItem.Text>
              </ListItem.Content>
            </ListItem>
          </CategoriesSelect.Option>
        ))}
      </CategoriesSelect>

      <StyledInput
        placeholder={filterAmount(2345.32)}
        name="amount"
        id="transaction_amount"
        label="Transaction amount"
        value={transaction.amount || ''}
        onChange={handleChange}
      />

      <ButtonWrapper>
        <Button color="#CBD4E3">Cancel</Button>
        <Button icon="angle-right" onClick={addTransation} left="1.2">
          New transaction
        </Button>
      </ButtonWrapper>
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
