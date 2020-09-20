import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/mainTheme'
import { addDecorator } from '@storybook/react'
import registerFaIcons from 'registerFaIcons'

registerFaIcons()

addDecorator((storyFn) => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>)
