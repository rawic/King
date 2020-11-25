import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'

import { StyledArrowButton } from './ActionButton.styles'

const ActionButton = ({ handleDropdownClick }) => (
  <StyledArrowButton onClick={handleDropdownClick}>
    <FontAwesomeIcon icon="angle-down" />
  </StyledArrowButton>
)

ActionButton.propTypes = {
  handleDropdownClick: PropTypes.func.isRequired
}

export default ActionButton
