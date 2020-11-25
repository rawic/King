import styled, { css } from 'styled-components'

const StyledBalanceCard = styled.div`
  background-color: ${({ color }) => color};
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  height: 143px;
  justify-content: space-between;
  padding: 2.5rem 2.5rem 2rem 2.5rem;
  width: 300px;
  line-height: 1.25;
`

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;

  ${({ spaceBetween }) =>
    spaceBetween &&
    css`
      justify-content: space-between;
    `}
`

const StyledIconCircle = styled.div`
  align-items: center;
  background-color: ${({ colors }) => colors.iconBg};
  border-radius: 50%;
  color: ${({ colors }) => colors.highlight};
  display: flex;
  font-size: ${({ small, theme }) => (small ? theme.fontSize.xxs : theme.fontSize.xl)};
  height: ${({ small }) => (small ? '20px' : '53px')};
  justify-content: center;
  margin-right: ${({ small }) => (small ? '.7rem' : '1.5rem')};
  width: ${({ small }) => (small ? '20px' : '53px')};
`

const StyledAmount = styled.p`
  font-size: 2.2rem;
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
`

const StyledBalanceAmount = styled.span`
  color: ${({ color }) => color};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: ${({ theme }) => theme.fontWeight.extraBold};
`

export { StyledBalanceCard, StyledWrapper, StyledIconCircle, StyledAmount, StyledBalanceAmount }
