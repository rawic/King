import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledGroup = styled.div``

const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.grey100};
  border-radius: 0.6rem;
  border: 0;
  padding: 1.4rem 2.5rem;
  transition: background-color 0.2s;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.secondary};
    font-size: ${({ theme }) => theme.fontWeight.sm};
  }

  &:focus {
    background-color: hsl(0, 0%, 96%);
    outline: none;
  }
`

const Input = ({ label, placeholder }) => (
  <StyledGroup>
    {label && <StyledLabel>{label}</StyledLabel>}
    <StyledInput placeholder={placeholder}></StyledInput>
  </StyledGroup>
)

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string
}

export default Input
