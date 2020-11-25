import Input from 'components/atoms/Input/Input'
import styled from 'styled-components'

export const StyledWrapper = styled.div`
  flex: 1 0 auto;
  position: relative;
`

export const StyledInput = styled(Input)`
  input {
    padding-right: 15rem;

    &,
    &::placeholder {
      font-size: ${({ theme }) => theme.fontSize.s};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
    }

    &::placeholder {
      color: ${({ theme }) => theme.secondary};
    }
  }
`

export const StyledDropdownWrapper = styled.div`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
`
