import React from 'react'

import Notification from '../Notification/Notification'

const notifications = [
  {
    id: 1,
    type: 'income',
    message: '',
    price: '45,00',
    created: '23:42'
  },
  {
    id: 2,
    type: 'income',
    message: '',
    price: '45,00',
    created: '23:42'
  },
  {
    id: 3,
    type: 'outcome',
    message: '',
    price: '14,49',
    created: '15:32'
  }
]

const NotificationsList = () =>
  notifications.map((notification) => (
    <Notification data={notification} key={notification.id}></Notification>
  ))

export default NotificationsList
