import React from 'react'
import Paragraph from './Paragraph'

export default {
  title: 'Paragraph',
  component: Paragraph
}

export const Normal = () => <Paragraph>Hello world</Paragraph>
export const Normal2 = () => (
  <Paragraph secondary size="xl">
    Hello world
  </Paragraph>
)
export const Normal3 = () => <Paragraph dark>Hello world</Paragraph>
