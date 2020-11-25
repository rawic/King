import styled from 'styled-components'

export const StyledWrapper = styled.div`
  border-bottom: 1px solid hsl(249, 30%, 95%);
  border-top: 1px solid hsl(249, 30%, 95%);
  color: ${({ theme }) => theme.secondary};
  padding: 1.3rem 3.5rem;
  &:not(:first-child) {
    margin-top: -0.1rem;
  }
  &:hover {
    background-color: hsl(210, 66.7%, 98.8%);
  }
`

export const StyledMessage = styled.p`
  color: ${({ theme }) => theme.tertiary};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  position: relative;
  &::before {
    content: '';
    background-color: ${({ color }) => color};
    border-radius: 50%;
    display: block;
    height: 0.8rem;
    left: -1.7rem;
    position: absolute;
    top: 0.7rem;
    width: 0.8rem;
  }
`

export const StyledTextTimeWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const StyledText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xxs};
`

export const StyledTime = styled(StyledText)`
  margin-left: auto;
`
