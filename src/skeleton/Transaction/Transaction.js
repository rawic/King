import React from 'react'
import { StyledSkeletonElement } from 'skeleton/Skeleton.styles'

import { StyledTransactionHeader, StyledTransactionWrapper } from './Transaction.styles'

const SkeletonTransaction = () => (
  <StyledTransactionWrapper>
    <StyledTransactionHeader>
      <StyledSkeletonElement circle right="1.6rem" />
      <StyledSkeletonElement title width="17rem" />
    </StyledTransactionHeader>

    <StyledSkeletonElement height="3.4rem" width="9.5rem" radius="1.2rem" />
    <StyledSkeletonElement width="7rem" />
    <StyledSkeletonElement width="8.5rem" />
    <StyledSkeletonElement width="1.5rem" height="1.5rem" />
  </StyledTransactionWrapper>
)

export default SkeletonTransaction
