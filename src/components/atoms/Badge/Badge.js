import styled, { css } from 'styled-components'
import { transactionTheme } from 'theme/mainTheme'

const StyledBadge = styled.span`
  background-color: ${({ type }) => transactionTheme[type].colors.bg};
  border-radius: 0.6rem;
  color: ${({ type }) => transactionTheme[type].colors.text};
  display: inline-flex;
  font-size: ${({ theme }) => theme.fontSize.xxxs};
  height: 1.9rem;
  line-height: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  text-transform: uppercase;

  ${({ transaction }) =>
    transaction &&
    css`
      font-size: ${({ theme }) => theme.fontSize.s};
      font-weight: ${({ theme }) => theme.fontWeight.extraBold};
      height: 3.4rem;
      line-height: 3.6rem;
      padding-left: 1.8rem;
      padding-right: 1.8rem;
    `}

  ${({ notification }) =>
    notification &&
    css`
      font-weight: ${({ theme }) => theme.fontWeight.black};
      margin-top: 0.7rem;
    `}
`

export default StyledBadge
