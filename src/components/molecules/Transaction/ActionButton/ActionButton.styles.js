import styled from 'styled-components'

export const StyledArrowButton = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 0;

  &:focus {
    color: ${({ theme }) => theme.tertiary};
    outline: none;
  }
`
