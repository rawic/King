import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'

const StyledGroup = styled.div`
  & + & {
    margin-top: 2rem;
  }
`

const StyledLabel = styled.label`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 0.6rem;
`

const StyledWrapper = styled.div`
  position: relative;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.secondary};
  left: 2rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.grey100};
  border-radius: 0.6rem;
  border: 0;
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding: 1.4rem 2.5rem;
  transition: background-color 0.2s;
  width: 100%;
  &::placeholder {
    color: ${({ theme }) => theme.secondary};
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  &:focus {
    background-color: hsl(0, 0%, 96%);
    outline: none;
  }

  ${({ icon }) =>
    icon &&
    css`
      padding-left: 5rem;
    `}
`

let inputTemplate

const Input = ({ className, label, icon, name, placeholder, id, onChange }) => {
  if (icon) {
    inputTemplate = (
      <StyledWrapper>
        <StyledInput
          name={name}
          placeholder={placeholder}
          id={id}
          icon={icon}
          onChange={onChange}
        />
        <StyledFontAwesomeIcon icon={icon} />
      </StyledWrapper>
    )
  } else {
    inputTemplate = (
      <StyledInput name={name} placeholder={placeholder} id={id} onChange={onChange} />
    )
  }

  return (
    <StyledGroup className={className}>
      {label && <StyledLabel htmlFor={id}>{label}</StyledLabel>}
      {inputTemplate}
    </StyledGroup>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

export default Input
