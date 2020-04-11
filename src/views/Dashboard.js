import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Heading from 'components/atoms/Heading/Heading'
import Paragraph from 'components/atoms/Paragraph/Paragraph'

const StyledWelcome = styled.span`
  color: ${({ theme }) => theme.highlight};
  display: inline-block;
  margin-top: 0.7rem;
`

const StyledTitle = styled.b`
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
`

const titles = ['King', 'Prince', 'Princess', 'Queen']
const title = titles[Math.floor(Math.random() * titles.length)]

const Welcome = ({ title }) => (
  <Paragraph big>
    <StyledWelcome>
      Hello, <StyledTitle>{title}</StyledTitle>
    </StyledWelcome>
    . Here’s general overview.
  </Paragraph>
)

const Dashboard = () => (
  <>
    <Heading>Dashboard</Heading>
    <Welcome title={title}></Welcome>
  </>
)

Welcome.propTypes = {
  title: PropTypes.string.isRequired
}

export default Dashboard
