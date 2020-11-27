import { select, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import styled from 'styled-components'

import Notification from './Notification'

const StyledWrapper = styled.div`
  width: 25rem;
`

export default {
  title: 'Notification',
  component: Notification,
  decorators: [withKnobs]
}

export const Notifications = () => {
  const label = 'Types'
  const options = {
    Income: {
      id: 1,
      type: 'income',
      message: '',
      amount: '45,00',
      created: '23:42'
    },
    Outcome: {
      id: 2,
      type: 'outcome',
      message: '',
      amount: '14,49',
      created: '15:32'
    }
  }
  const defaultValue = options.Income
  const groupId = 'GROUP-ID1'
  const value = select(label, options, defaultValue, groupId)

  return (
    <StyledWrapper>
      <Notification details={value} />
    </StyledWrapper>
  )
}
