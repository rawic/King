import { ModalProvider } from 'context/modalContext'
import { AnimateSharedLayout, motion } from 'framer-motion'
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
        <AnimateSharedLayout>
          <motion.div layout className="app-container">{children}</motion.div>
        </AnimateSharedLayout>
      </ModalProvider>
    </ThemeProvider>
  </React.Fragment>
)

MainTemplate.propTypes = {
  children: PropTypes.array.isRequired
}

export default MainTemplate
