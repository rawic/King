import NavTitle from 'components/atoms/NavTitle/NavTitle'
import Notifications from 'components/molecules/NotificationsList/NotificationsList'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Nav from './Nav/Nav'
import { StyledInnerWrapper, StyledLogo, StyledWrapper } from './Sidebar.styles'

const Sidebar = ({ notifications }) => (
  <StyledWrapper>
    <StyledInnerWrapper layout>
      <Link to="/">
        <StyledLogo />
      </Link>
      <NavTitle>Navigation</NavTitle>
    </StyledInnerWrapper>

    <Nav />

    <StyledInnerWrapper bottom="2.5" layout>
      <NavTitle>Notifications</NavTitle>
    </StyledInnerWrapper>

    <Notifications notifications={notifications} />
  </StyledWrapper>
)

Sidebar.propTypes = {
  notifications: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications
  }
}

const SidebarContainer = connect(mapStateToProps)(Sidebar)

export default SidebarContainer
