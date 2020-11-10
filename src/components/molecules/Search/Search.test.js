import 'jest-styled-components'

import { fireEvent, render } from '@testing-library/react'
import Dropdown from 'components/molecules/Dropdown/Dropdown'
import FilterButton from 'components/molecules/Search/FilterButton/FilterButton'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/mainTheme'

import { handleFilterChange, searchFilterOptions } from './Search.utils'

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
  fireEvent.click(getByTestId('dropdown-option-outcome'))
  expect(trigger).toHaveTextContent('Outcomes')
})
