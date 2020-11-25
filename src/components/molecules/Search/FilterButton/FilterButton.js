/* eslint-disable multiline-ternary */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'

import { StyledFilterButton, StyledIconWrapper } from './FilterButton.styles'

const FilterButton = ({ children, handleDropdownClick, isOpened }) => {
  return (
    <StyledFilterButton onClick={handleDropdownClick} data-testid="dropdown-trigger" layout>
      {children} &nbsp;
      <StyledIconWrapper layout>
        {isOpened ? <FontAwesomeIcon icon="caret-up" /> : <FontAwesomeIcon icon="caret-down" />}
      </StyledIconWrapper>
    </StyledFilterButton>
  )
}

FilterButton.propTypes = {
  children: PropTypes.element.isRequired,
  handleDropdownClick: PropTypes.func.isRequired,
  isOpened: PropTypes.bool.isRequired
}

export default FilterButton
