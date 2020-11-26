import PropTypes from 'prop-types'
import React from 'react'

import Shimmer from './Shimmer/Shimmer'
import { StyledSkeletonElement, StyledSkeletonWrapper } from './Skeleton.styles'
import SkeletonTransaction from './Transaction/Transaction'

const Skeleton = ({ children }) => (
  <StyledSkeletonWrapper>
    {children}
    <Shimmer />
  </StyledSkeletonWrapper>
)

Skeleton.propTypes = {
  children: PropTypes.element.isRequired
}

Skeleton.Element = StyledSkeletonElement
Skeleton.Transaction = SkeletonTransaction

export default Skeleton
