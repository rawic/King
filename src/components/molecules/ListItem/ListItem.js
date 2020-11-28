import PropTypes from 'prop-types'
import React from 'react'

import {
  ListItemAvatar,
  ListItemContent,
  ListItemHeading,
  ListItemText,
  ListItemWrapper
} from './ListItem.styles'

const ListItem = (props) => <ListItemWrapper {...props}>{props.children}</ListItemWrapper>

ListItem.propTypes = {
  children: PropTypes.node.isRequired
}

ListItem.Avatar = ListItemAvatar
ListItem.Content = ListItemContent
ListItem.Heading = ListItemHeading
ListItem.Text = ListItemText

export default ListItem
