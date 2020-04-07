import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 20px;
`

const LinkIcon = ({ icon, text }) => (
  <>
    <StyledFontAwesomeIcon icon={icon} /> {text}
  </>
)

LinkIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default LinkIcon
