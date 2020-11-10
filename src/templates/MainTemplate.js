import { ModalProvider } from 'context/modalContext'
import PropTypes from 'prop-types'
import React from 'react'
import registerFaIcons from 'registerFaIcons'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/GlobalStyle'
import { theme } from 'theme/mainTheme'

registerFaIcons()

const MainTemplate = ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <div className="app-container">{children}</div>
      </ModalProvider>
    </ThemeProvider>
  </React.Fragment>
)

MainTemplate.propTypes = {
  children: PropTypes.array.isRequired
}

export default MainTemplate
