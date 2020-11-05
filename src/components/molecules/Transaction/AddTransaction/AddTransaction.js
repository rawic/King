import Button from 'components/atoms/Button/Button'
import Input from 'components/atoms/Input/Input'
import { ModalContext } from 'context/modalContext'
import React, { useContext } from 'react'
import styled from 'styled-components'
import { filterAmount } from 'utilities'

const StyledSectionButton = styled(Button)`
  margin-bottom: 2.7rem;
`

const AddTransactionForm = () => (
  <form action="">
    <Input placeholder="Netflix subscription" label="Transaction name" />
    <Input placeholder="Select transaction type" label="Transaction type" />
    <Input placeholder={filterAmount(2345.32)} label="Transaction amount" />
  </form>
)

const AddTransaction = () => {
  const { handleModal } = useContext(ModalContext)
  console.log('render')

  return (
    <StyledSectionButton icon="angle-right" onClick={() => handleModal(AddTransactionForm)}>
      New transaction
    </StyledSectionButton>
  )
}

export default AddTransaction
