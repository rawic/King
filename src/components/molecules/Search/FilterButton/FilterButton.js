import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'

import { StyledFilterButton } from './FilterButton.styles'

const FilterButton = ({ children, handleDropdownClick, isOpened }) => {
  return (
    <StyledFilterButton onClick={handleDropdownClick} data-testid="dropdown-trigger">
      {children} &nbsp;
      {isOpened ? <FontAwesomeIcon icon="caret-up" /> : <FontAwesomeIcon icon="caret-down" />}
    </StyledFilterButton>
  )
}

FilterButton.propTypes = {
  children: PropTypes.string.isRequired,
  handleDropdownClick: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired
}

export default FilterButton
