import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from 'components/atoms/Button/Button'
import Input from 'components/atoms/Input/Input'
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

const StyledDropdown2 = styled(Dropdown2)`
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

// const StyledListItem = styled(ListItem)`
//   background-color: 'red';
//   ${({ isActive }) => {
//     console.log(isActive)
//     return isActive ? 'background-color: red;' : null
//   }}
// `

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
    e.preventDefault()

    const { title, type, amount } = transaction
    console.log(formatDateWithTime(new Date()))

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
    <Input
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
      <Input
        placeholder="Netflix subscription"
        name="title"
        id="transaction_type"
        label="Transaction name"
        value={transaction.name}
        onChange={handleChange}
      />

      <StyledDropdown2 trigger={TransactionCategory} onChange={handleCategoryChange} open>
        {categories.map(({ id, color, icon, name }) => (
          <StyledDropdown2.Option key={id} value={name}>
            <ListItem isActive={transaction.category === name}>
              <ListItem.Avatar color={color}>
                <FontAwesomeIcon icon={icon} />
              </ListItem.Avatar>
              <ListItem.Content>
                <ListItem.Heading>{name}</ListItem.Heading>
                <ListItem.Text big>Incomes from my job</ListItem.Text>
              </ListItem.Content>
            </ListItem>
          </StyledDropdown2.Option>
        ))}
      </StyledDropdown2>

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
