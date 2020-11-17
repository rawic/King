
import PropTypes from 'prop-types'
import React from 'react'

import { StyledFontAwesomeIcon, StyledOption } from './Option.styles'

const hasIcon = (icon) => {
  if (icon === undefined) return

  return (
    <StyledFontAwesomeIcon icon={icon.name} color={icon.color} fixedWidth></StyledFontAwesomeIcon>
  )
}

const Option = ({ children, changeSelected, icon, isSelected, testId }) => (
  <StyledOption
    onClick={changeSelected(children)}
    data-testid={testId}
    role="option"
    aria-selected={isSelected}
  >
    {children} {hasIcon(icon)}
  </StyledOption>
)

Option.propTypes = {
  changeSelected: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  testId: PropTypes.string,
  icon: PropTypes.object,
  isSelected: PropTypes.bool
}

export default Option
