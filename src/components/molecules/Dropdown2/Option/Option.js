import PropTypes from 'prop-types'
import React from 'react'

import StyledOption from './Option.styles'

const Option = ({ children, changeSelected, value, isSelected }) => (
  <StyledOption onClick={() => changeSelected(value)} className={isSelected ? 'active' : null}>
    {children}
  </StyledOption>
)

Option.propTypes = {
  children: PropTypes.node,
  isSelected: PropTypes.bool,
  changeSelected: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

export default Option
