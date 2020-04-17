import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import ReactPerformance from 'react-performance'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledGroup = styled.div`
  & + & {
    margin-top: 2rem;
  }
`

const StyledLabel = styled.label`
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 0.5rem;
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

const Input = ({ className, label, icon, placeholder, onChange }) => {
  const inputTemplate = icon ? (
    <StyledWrapper>
      <StyledInput placeholder={placeholder} icon={icon} onChange={onChange} />
      <StyledFontAwesomeIcon icon={icon} />
    </StyledWrapper>
  ) : (
    <StyledInput placeholder={placeholder} />
  )

  return (
    <StyledGroup className={className}>
      {label && <StyledLabel>{label}</StyledLabel>}
      {inputTemplate}
    </StyledGroup>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  search: PropTypes.bool
}

export default ReactPerformance.measure({
  getId: 'Input',
  Component: Input,
  isCollapsed: false
})
