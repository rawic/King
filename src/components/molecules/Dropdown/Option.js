import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledOption = styled.li`
  cursor: pointer;
  padding: 0.6rem 1.5rem;

  &:hover {
    color: ${({ theme }) => theme.highlight};
  }
`

const Option = ({ children, changeSelected }) => (
  <StyledOption onClick={changeSelected(children)}>{children}</StyledOption>
)

Option.propTypes = {
  changeSelected: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}

export default Option
