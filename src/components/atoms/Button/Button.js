import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'

const ButtonWrapper = styled.button`
  background: ${({ color, theme }) => color || theme.highlight};
  border-radius: 0.6rem;
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
  transition: background-color ${({ theme }) => theme.transition.duration.default};

  ${({ left }) =>
    left &&
    css`
      margin-left: ${left}rem;
    `}

  &:hover {
    background-color: ${({ theme }) => theme.highlightDarker};
  }
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

const Button = ({ children, icon, ...props }) => (
  <ButtonWrapper icon={icon} {...props} type="button">
    {children}
    {icon && (
      <IconWrapper>
        <FontAwesomeIcon icon={icon} />
      </IconWrapper>
    )}
  </ButtonWrapper>
)

Button.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string
}

export default Button
