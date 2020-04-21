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

test('fake test', () => expect(2).toBeTruthy())
