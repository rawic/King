import { ReactComponent as LogoImage } from 'assets/king.svg'
import PropTypes from 'prop-types'
import React from 'react'

const Logo = ({ className }) => (
  <h1 className={className}>
    <LogoImage></LogoImage>
  </h1>
)

Logo.propTypes = {
  className: PropTypes.string
}

export default Logo
