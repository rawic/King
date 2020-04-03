import styled, { css } from 'styled-components'

const Paragraph = styled.p`
  font-size: ${({ size, theme }) => theme.fontSize[size] || theme.fontSize.s};
  color: ${({ color, theme }) => theme[color]};

  ${({ grey }) =>
    grey &&
    css`
      color: ${({ theme }) => theme.secondary};
    `}
`

export default Paragraph
