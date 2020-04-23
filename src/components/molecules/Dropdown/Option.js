import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledOption = styled.li`
  cursor: pointer;
  padding: 0.6rem 1.5rem;

  &:hover {
    color: ${({ theme }) => theme.highlight};
  }
`

const Option = ({ children, changeSelected, testId }) => (
  <StyledOption onClick={changeSelected(children)} data-testid={testId}>
    {children}
  </StyledOption>
)

Option.propTypes = {
  changeSelected: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  testId: PropTypes.string
}

export default Option
