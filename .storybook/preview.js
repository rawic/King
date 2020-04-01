import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/mainTheme'
import { addDecorator } from '@storybook/react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faAngleRight,
  faGripHorizontal,
  faChartBar,
  faExchangeAlt,
  faCog
} from '@fortawesome/free-solid-svg-icons'
library.add(fab, faAngleRight, faGripHorizontal, faChartBar, faExchangeAlt, faCog)

addDecorator((storyFn) => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>)
