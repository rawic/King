import Dropdown from 'components/molecules/Dropdown/Dropdown'
import React from 'react'

import FilterButton from './FilterButton/FilterButton'
import { StyledDropdownWrapper, StyledInput, StyledWrapper } from './Search.styles'
import { handleFilterChange, handleValueChange, searchFilterOptions } from './Search.utils'

const Search = ({ ...props }) => {
  return (
    <StyledWrapper>
      <StyledInput {...props} onChange={handleValueChange} />

      <StyledDropdownWrapper>
        <Dropdown
          content="Filter"
          trigger={FilterButton}
          options={searchFilterOptions}
          onChange={handleFilterChange}
        />
      </StyledDropdownWrapper>
    </StyledWrapper>
  )
}

export default React.memo(Search)
