import React from 'react'

import Paragraph from './Paragraph'

export default {
  title: 'Paragraph',
  component: Paragraph
}

export const Small = () => <Paragraph small>$ 45,00</Paragraph>

export const Big = () => <Paragraph big>Here’s general overview.</Paragraph>

export const BigBlack = () => (
  <Paragraph black big>
    Pocket money
  </Paragraph>
)
