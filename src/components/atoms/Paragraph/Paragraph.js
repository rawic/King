import styled, { css } from 'styled-components'

const Paragraph = styled.p`
  ${({ small, big, theme }) => (big || small ? null : { 'font-size': theme.fontSize.s })};
  ${({ black, theme }) => (black ? null : { color: theme.secondary })};

  ${({ black }) =>
    black &&
    css`
      color: ${({ theme }) => theme.primary};
    `};

  ${({ small }) =>
    small &&
    css`
      font-size: ${({ theme }) => theme.fontSize.xxs};
    `};

  ${({ big }) =>
    big &&
    css`
      font-size: ${({ theme }) => theme.fontSize.m};
    `};
`

export default Paragraph
