import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import React from 'react'

import Notification from '../Notification/Notification'

const NotificationsList = ({ notifications }) => (
  <motion.div layout>
    {notifications.map((notification) => (
      <Notification details={notification} key={notification.id}></Notification>
    ))}
  </motion.div>
)

NotificationsList.propTypes = {
  notifications: PropTypes.array.isRequired
}

export default NotificationsList
