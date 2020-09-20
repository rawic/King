import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 2rem;
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
