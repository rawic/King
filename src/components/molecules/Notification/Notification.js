import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import types from './types'

const StyledWrapper = styled.div`
  border-bottom: 1px solid hsl(249, 30%, 95%);
  border-top: 1px solid hsl(249, 30%, 95%);
  color: ${({ theme }) => theme.secondary};
  padding: 13px 35px;
  &:not(:first-child) {
    margin-top: -1px;
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
    height: 8px;
    left: -17px;
    position: absolute;
    top: 7px;
    width: 8px;
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
  border-radius: 6px;
  color: ${({ color }) => color.text};
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSize.xxxs};
  font-weight: ${({ theme }) => theme.fontWeight.black};
  height: 19px;
  line-height: 20px;
  margin-top: 7px;
  padding-left: 10px;
  padding-right: 10px;
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
