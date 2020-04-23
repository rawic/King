import 'jest-styled-components'

import { fireEvent, render } from '@testing-library/react'
import Dropdown from 'components/molecules/Dropdown/Dropdown'
import { FilterButton, searchFilterOptions } from 'components/molecules/Search/Search'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/mainTheme'

import { handleFilterChange } from './utils'

it('should toggle search filter dropdown on click', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Dropdown
        content="Filter"
        trigger={FilterButton}
        options={searchFilterOptions}
        onChange={handleFilterChange}
      />
    </ThemeProvider>
  )
  fireEvent.click(getByTestId('dropdown-trigger'))
  expect(getByTestId('dropdown')).toBeTruthy()
})

it('should change filter to Outcomes on click', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Dropdown
        content="Filter"
        trigger={FilterButton}
        options={searchFilterOptions}
        onChange={handleFilterChange}
      />
    </ThemeProvider>
  )

  const trigger = getByTestId('dropdown-trigger')

  fireEvent.click(trigger)
  fireEvent.click(getByTestId('dropdown-option-1'))
  expect(trigger).toHaveTextContent('Outcomes')
})
