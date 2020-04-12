import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'theme/GlobalStyle'
import { theme } from 'theme/mainTheme'
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
