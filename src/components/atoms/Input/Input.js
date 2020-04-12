import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledGroup = styled.div`
  &:not(:first-child) {
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

  ${({ search }) =>
    search &&
    css`
      &,
      &::placeholder {
        font-size: ${({ theme }) => theme.fontSize.s};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
      }
      ,
      &::placeholder {
        color: ${({ theme }) => theme.secondary};
      }
    `}
`

const StyledFiltersButton = styled.button`
  background-color: ${({ theme }) => theme.highlight};
  border-radius: 0.6rem;
  border: 0;
  color: white;
  display: inline-flex;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
  padding: 0.5rem 1.5rem;
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);

  &:focus {
    outline: none;
  }
`

const Input = ({ label, icon, placeholder, search }) => {
  const inputTemplate = icon ? (
    <StyledWrapper>
      <StyledInput placeholder={placeholder} icon={icon} search={search} />
      <StyledFontAwesomeIcon icon={icon} />
      {search && (
        <StyledFiltersButton>
          Filters &nbsp;<FontAwesomeIcon icon="sort-down" />
        </StyledFiltersButton>
      )}
    </StyledWrapper>
  ) : (
    <StyledInput placeholder={placeholder} icon={icon} />
  )

  return (
    <StyledGroup>
      {label && <StyledLabel>{label}</StyledLabel>}
      {inputTemplate}
    </StyledGroup>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  icon: PropTypes.string,
  search: PropTypes.bool
}

export default Input
