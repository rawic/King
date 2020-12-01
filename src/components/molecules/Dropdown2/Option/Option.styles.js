import styled from 'styled-components'

const StyledOption = styled.li`
  align-items: center;
  cursor: pointer;
  display: flex;
  padding: 0.6rem 1.5rem;

  &:hover {
    color: ${({ theme }) => theme.highlight};
  }
`

export default StyledOption
