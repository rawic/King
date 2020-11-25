import styled from 'styled-components'

export const StyledArrowButton = styled.button`
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 0;
  transition: color ${({ theme }) => theme.transition.duration.default};

  &:hover {
    color: ${({ theme }) => theme.tertiary};
  }

  &:focus {
    color: ${({ theme }) => theme.tertiary};
    outline: none;
  }
`
