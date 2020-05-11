import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledOption = styled.li`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  padding: 0.6rem 1.5rem;

  &:hover {
    color: ${({ theme }) => theme.highlight};
  }
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ color }) => color};
  font-size: 1.3rem;
  margin-left: 0.7rem;
`

const hasIcon = (icon) => {
  if (icon === undefined) return

  return <StyledFontAwesomeIcon icon={icon.name} color={icon.color} fixedWidth></StyledFontAwesomeIcon>
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
  testId: PropTypes.string
}

export default Option
