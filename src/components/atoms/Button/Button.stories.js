import React from 'react'
import Button from './Button'

export default {
  title: 'Button',
  component: Button
}

export const Highlight = () => <Button icon="angle-right">New transaction</Button>
export const Cancel = () => <Button color="#CBD4E3">Cancel</Button>
