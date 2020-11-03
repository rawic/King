import Input from 'components/atoms/Input/Input'
import React from 'react'
import { filterAmount } from 'utilities'

const AddTransaction = () => (
  <form action="">
    <Input placeholder="Netflix subscription" label="Transaction name" />
    <Input placeholder="Select transaction type" label="Transaction type" />
    <Input placeholder={filterAmount(2345.32)} label="Transaction amount" />
  </form>
)

export default AddTransaction
