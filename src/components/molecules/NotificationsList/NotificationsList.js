import PropTypes from 'prop-types'
import React from 'react'

import Notification from '../Notification/Notification'

const NotificationsList = ({ notifications }) =>
  notifications.map((notification) => (
    <Notification details={notification} key={notification.id}></Notification>
  ))

NotificationsList.propTypes = {
  notifications: PropTypes.array.isRequired
}

export default NotificationsList
