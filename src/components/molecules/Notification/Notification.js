import Badge from 'components/atoms/Badge/Badge'
import PropTypes from 'prop-types'
import React from 'react'
import { transactionTheme } from 'theme/mainTheme'

import {
  StyledMessage,
  StyledText,
  StyledTextTimeWrapper,
  StyledTime,
  StyledWrapper
} from './Notification.styles'
import { notificationTypes } from './Notification.utils'

const Notification = ({ details }) => {
  const { message, amount, created, type } = details
  const { message: typeMessage } = notificationTypes[type]

  return (
    <StyledWrapper>
      <StyledMessage color={transactionTheme[type].colors.dot}>
        {message || typeMessage}
      </StyledMessage>
      <StyledTextTimeWrapper>
        <StyledText>
          {type === 'outcome' && '-'}$ {amount}
        </StyledText>
        <StyledTime>{created}</StyledTime>
      </StyledTextTimeWrapper>
      <Badge type={type} notification>
        {type}
      </Badge>
    </StyledWrapper>
  )
}

Notification.propTypes = {
  details: PropTypes.object.isRequired
}

export default Notification
