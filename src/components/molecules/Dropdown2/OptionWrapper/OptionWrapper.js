import PropTypes from 'prop-types'
import React from 'react'

const OptionWrapper = ({ children }, ...props) => <li {...props}>{children}</li>

OptionWrapper.displayName = 'OptionWrapper'

OptionWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default OptionWrapper
