import styled, { css } from 'styled-components'

const Paragraph = styled.p`
  color: ${({ dark, theme }) => (dark ? theme.primary : theme.secondary)};
  font-size: ${({ size, theme }) => theme.fontSize[size] || theme.fontSize.m};

  ${({ secondary }) =>
    secondary &&
    css`
      color: red;
    `}
`

export default Paragraph
