import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ButtonWrapper = styled.button`
  background: ${({ color, theme }) => color || theme.highlight};
  border-radius: .6rem;
  border: 0;
  color: #ffffff;
  font-family: Nunito;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  height: 4rem;
  padding-left: 2rem;
  padding-right: ${({ icon }) => (icon ? '5.7rem' : '2rem')};
  position: relative;
  text-align: left;
  text-transform: uppercase;
`

const IconWrapper = styled.span`
  align-items: center;
  background-color: #1f47cf;
  border-radius: 50%;
  display: flex;
  height: 2.7rem;
  justify-content: center;
  position: absolute;
  right: 1.4rem;
  top: 50%;
  transform: translateY(-50%);
  width: 2.7rem;
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
