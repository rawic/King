import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import types from './types'

const StyledWrapper = styled.div`
  border-bottom: 1px solid hsl(249, 30%, 95%);
  border-top: 1px solid hsl(249, 30%, 95%);
  color: ${({ theme }) => theme.secondary};
  padding: 1.3rem 3.5rem;
  &:not(:first-child) {
    margin-top: -.1rem;
  }
  &:hover {
    background-color: hsl(210, 66.7%, 98.8%);
  }
`

const StyledMessage = styled.p`
  color: ${({ theme }) => theme.tertiary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  position: relative;
  &::before {
    content: '';
    background-color: ${({ color }) => color};
    border-radius: 50%;
    display: block;
    height: .8rem;
    left: -1.7rem;
    position: absolute;
    top: .7rem;
    width: .8rem;
  }
`

const StyledTextTimeWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const StyledText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
`

const StyledTime = styled(StyledText)`
  margin-left: auto;
`

const StyledBadge = styled.span`
  background-color: ${({ color }) => color.bg};
  border-radius: .6rem;
  color: ${({ color }) => color.text};
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.xxxs};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  height: 1.9rem;
  line-height: 2rem;
  margin-top: .7rem;
  padding-left: 1rem;
  padding-right: 1rem;
  text-transform: uppercase;
`

const Notification = ({ data }) => {
  const { message, price, created, type } = data
  const { color, message: typeMessage, name } = types[type]

  return (
    <StyledWrapper>
      <StyledMessage color={color.dot}>{message || typeMessage}</StyledMessage>
      <StyledTextTimeWrapper>
        <StyledText>
          {name === 'outcome' && '-'}$ {price}
        </StyledText>
        <StyledTime>{created}</StyledTime>
      </StyledTextTimeWrapper>
      <StyledBadge color={color}>{type}</StyledBadge>
    </StyledWrapper>
  )
}

Notification.propTypes = {
  data: PropTypes.object.isRequired
}

export default Notification
