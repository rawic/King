import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonWrapper = styled.button`
  height: 43px;
  background: ${({ color, theme }) => color || theme.highlight};
  font-family: Nunito;
  font-weight: bold;
  font-size: 13px;
  position: relative;
  padding-left: 20px;
  padding-right: ${({ icon }) => (icon ? '57px' : '20px')};
  text-align: left;
  border-radius: 6px;
  border: 0;
  text-transform: uppercase;
  color: #ffffff;
`

const IconWrapper = styled.span`
  width: 27px;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: #1f47cf;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  right: 14px;
`

const Button = ({ children, icon, color }) => {
  const Button = icon ? (
    <ButtonWrapper color={color} icon={icon}>
      {children}{' '}
      <IconWrapper>
        <FontAwesomeIcon icon={icon} />
      </IconWrapper>
    </ButtonWrapper>
  ) : (
    <ButtonWrapper color={color}>{children}</ButtonWrapper>
  )

  return Button
}

export default Button
