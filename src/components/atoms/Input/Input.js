import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import ReactPerformance from 'react-performance'
import DashboardContext from 'context/DashboardContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Dropdown from 'components/molecules/Dropdown/Dropdown'

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

  ${({ search }) =>
    search &&
    css`
      & {
        padding-right: 15rem;
      }
      ,
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

  &:focus {
    background-color: ${({ theme }) => theme.highlightDarker};
    outline: none;
  }
`

const StyledFilterButton = styled.div`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
`

const FilterButton = ({ handleDropdownClick, children }) => (
  <StyledFiltersButton onClick={handleDropdownClick}>
    {children} &nbsp;
    <FontAwesomeIcon icon="sort-down" />
  </StyledFiltersButton>
)

const searchFilterOptions = ['Incomes', 'Outcomes', 'All']

const Input = ({ className, label, icon, placeholder, search }) => {
  const searchState = useContext(DashboardContext)
  let inputTemplate = null

  if (search) {
    inputTemplate = (
      <StyledWrapper>
        <StyledInput
          placeholder={placeholder}
          icon={icon}
          search={search}
          onChange={searchState.updateSearchInput}
        />
        <StyledFontAwesomeIcon icon={icon} />

        <StyledFilterButton>
          <Dropdown
            content="Filter"
            trigger={FilterButton}
            options={searchFilterOptions}
            onChange={searchState.updateSearch}
          />
        </StyledFilterButton>
      </StyledWrapper>
    )
  } else {
    inputTemplate = icon ? (
      <StyledWrapper>
        <StyledInput placeholder={placeholder} icon={icon} />
        <StyledFontAwesomeIcon icon={icon} />
      </StyledWrapper>
    ) : (
      <StyledInput placeholder={placeholder} />
    )
  }

  return (
    <StyledGroup className={className}>
      {label && <StyledLabel>{label}</StyledLabel>}
      {inputTemplate}
    </StyledGroup>
  )
}

FilterButton.propTypes = {
  children: PropTypes.string.isRequired,
  handleDropdownClick: PropTypes.func.isRequired
}

Input.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  search: PropTypes.bool
}

export default ReactPerformance.measure({
  getId: 'Input',
  Component: Input,
  isCollapsed: false
})
