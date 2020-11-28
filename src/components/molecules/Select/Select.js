import PropTypes from 'prop-types'
import React from 'react'

import { Option } from './Select.styles'

const Select = ({ children }) => <div>{children}</div>

Select.propTypes = {
  children: PropTypes.element.isRequired
}

Select.Option = Option

export default Select
