import styled from 'styled-components'

export const StyledSummaryBar = styled.section`
  background-color: hsl(210, 66.7%, 98.8%);
  border-bottom-left-radius: 1.2rem;
  border-top-right-radius: 1.2rem;
  flex: 1 0 auto;
  margin-bottom: 3rem;
  margin-right: 3rem;
  margin-top: 3rem;
  padding: 3rem;
  width: 290px;
`

export const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.m};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`
