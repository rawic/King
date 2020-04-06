import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonWrapper = styled.button`
  background: ${({ color, theme }) => color || theme.highlight};
  border-radius: 6px;
  border: 0;
  color: #ffffff;
  font-family: Nunito;
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  height: 40px;
  padding-left: 20px;
  padding-right: ${({ icon }) => (icon ? '57px' : '20px')};
  position: relative;
  text-align: left;
  text-transform: uppercase;
`

const IconWrapper = styled.span`
  align-items: center;
  background-color: #1f47cf;
  border-radius: 50%;
  display: flex;
  height: 27px;
  justify-content: center;
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  width: 27px;
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
