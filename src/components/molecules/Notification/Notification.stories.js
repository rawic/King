import React from 'react'
import { withKnobs, select } from '@storybook/addon-knobs'
import Notification from './Notification'
import { theme } from 'theme/mainTheme'

export default {
  title: 'Notification',
  component: Notification,
  decorators: [withKnobs]
}

export const Notifications = () => {
  const label = 'Types'
  const options = {
    Income: {
      color: {
        bg: theme.successBg,
        dot: theme.highlight,
        text: theme.success
      },
      created: '23:42',
      message: 'Income added',
      name: 'income',
      price: '45,00'
    },
    Outcome: {
      color: {
        bg: theme.errorBg,
        dot: theme.error,
        text: theme.error
      },
      created: '15:32',
      message: 'Outcome added',
      name: 'outcome',
      price: '14,49'
    }
  }
  const defaultValue = options.Income
  const groupId = 'GROUP-ID1'
  const value = select(label, options, defaultValue, groupId)
  return (
    <Notification type={value}>
      {value.message}
    </Notification>
  )
}
