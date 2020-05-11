import React from 'react'

import Notification from '../Notification/Notification'

const NotificationsList = ({ notifications }) =>
  notifications.map((notification) => (
    <Notification details={notification} key={notification.id}></Notification>
  ))

export default NotificationsList
