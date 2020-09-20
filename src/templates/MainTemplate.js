import PropTypes from 'prop-types'
import React, { Component } from 'react'
import registerFaIcons from 'registerFaIcons'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/GlobalStyle'
import { theme } from 'theme/mainTheme'

registerFaIcons()

class MainTemplate extends Component {
  render() {
    const { children } = this.props

    return (
      <React.Fragment>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <div className="app-container">{children}</div>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}

MainTemplate.propTypes = {
  children: PropTypes.array.isRequired
}

export default MainTemplate
