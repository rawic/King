import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

const StyledOption = styled.li`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: flex-end;
  padding: 0.6rem 1.5rem;

  &:hover {
    color: ${({ theme }) => theme.highlight};
  }
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${({ color }) => color};
  font-size: 1.3rem;
  margin-left: 0.7rem;
`

export { StyledOption, StyledFontAwesomeIcon }
