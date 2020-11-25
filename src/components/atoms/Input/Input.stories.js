import React from 'react'
import styled from 'styled-components'

import Input from './Input'

export default {
  title: 'Input',
  component: Input
}

const StyledWrapper = styled.div`
  max-width: 500px;
`

export const Default = () => (
  <StyledWrapper>
    <Input label="Transaction name" placeholder="Netflix subscription" />
  </StyledWrapper>
)

export const Search = () => (
  <StyledWrapper>
    <Input icon="search" placeholder="Search transactions..." search />
  </StyledWrapper>
)
