import PropTypes from 'prop-types'
import React from 'react'

import { StyledOption } from './Option.styles'

const Option = ({ children, changeSelected, value }) => {
  return <StyledOption onClick={() => changeSelected(value)}>{children}</StyledOption>
}

Option.propTypes = {
  children: PropTypes.any,
  changeSelected: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}
export default Option
