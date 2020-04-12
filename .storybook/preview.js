import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/mainTheme'
import { addDecorator } from '@storybook/react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faAngleRight,
  faChartBar,
  faCog,
  faExchangeAlt,
  faGripHorizontal,
  faSearch,
  faSortDown
} from '@fortawesome/free-solid-svg-icons'
library.add(fab, faAngleRight, faChartBar, faCog, faExchangeAlt, faGripHorizontal, faSearch, faSortDown)

addDecorator((storyFn) => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>)
