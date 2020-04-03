import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/mainTheme'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

import Button from 'components/atoms/Button/Button'

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Button>test</Button>
      </ThemeProvider>
    </div>
  )
}

export default App
