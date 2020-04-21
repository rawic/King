import React from 'react'
import { shallow } from 'enzyme'
import { handleFilterChange } from './utils'
import Search, { FilterButton, searchFilterOptions } from './Search'
import Dropdown from 'components/molecules/Dropdown/Dropdown'

it('renders without crashing', () => {
  const search = shallow(<Search />)
  expect(
    search.containsMatchingElement(
      <Dropdown
        content="Filter"
        trigger={FilterButton}
        options={searchFilterOptions}
        onChange={handleFilterChange}
      />
    )
  ).toBe(true)
})

it('should toggle search filter dropdown on click', () => {
  const dropdown = shallow(
    <Dropdown
      content="Filter"
      trigger={FilterButton}
      options={searchFilterOptions}
      onChange={handleFilterChange}
    />
  )

  const toggleOpened = () =>
    dropdown.setState((prevState) => {
      return { opened: !prevState.opened }
    })

  const filterButton = shallow(
    <FilterButton isOpened={false} handleDropdownClick={toggleOpened}>
      Filter
    </FilterButton>
  )

  expect(dropdown.state().opened).toEqual(false)
  filterButton.simulate('click')
  expect(dropdown.state().opened).toEqual(true)
  filterButton.simulate('click')
  expect(dropdown.state().opened).toEqual(false)
})
