import React from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as LogoImage } from 'assets/king.svg'

const Logo = ({ className }) => (
  <h1 className={className}>
    <LogoImage></LogoImage>
  </h1>
)

Logo.propTypes = {
  className: PropTypes.string
}

export default Logo
