import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import DashboardContext from 'context/DashboardContext'
import Input from 'components/atoms/Input/Input'
import Dropdown from 'components/molecules/Dropdown/Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledWrapper = styled.div`
  flex: 1 0 auto;
  position: relative;
`

const StyledInput = styled(Input)`
  input {
    padding-right: 15rem;

    &,
    &::placeholder {
      font-size: ${({ theme }) => theme.fontSize.s};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }

    &::placeholder {
      color: ${({ theme }) => theme.secondary};
    }
  }
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

const Search = ({ ...props }) => {
  const searchState = useContext(DashboardContext)

  return (
    <>
      <StyledWrapper>
        <StyledInput {...props} onChange={searchState.updateSearchInput} />

        <StyledFilterButton>
          <Dropdown
            content="Filter"
            trigger={FilterButton}
            options={searchFilterOptions}
            onChange={searchState.updateSearch}
          />
        </StyledFilterButton>
      </StyledWrapper>
    </>
  )
}

FilterButton.propTypes = {
  children: PropTypes.string.isRequired,
  handleDropdownClick: PropTypes.func.isRequired
}

export default Search
