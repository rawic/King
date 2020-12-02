import styled from 'styled-components'

const DropdownMenu = styled.div`
  background-color: white;
  border-radius: 0.6rem;
  box-shadow: 0 0.2rem 0.4rem hsla(0, 0%, 0%, 0.08);
  margin-top: 6px;
  padding-bottom: 0.4rem;
  padding-top: 0.4rem;
  position: absolute;
  right: 0;
  top: 100%;
  z-index: ${({ theme }) => theme.zindex.dropdown};
  min-width: 150px;
`

const DropdownList = styled.ul`
  font-size: ${({ theme }) => theme.fontSize.xs};
  list-style-type: none;
  width: 100%;
`

const DropdownWrapper = styled.div`
  position: relative;
`

export { DropdownMenu, DropdownList, DropdownWrapper }
