import { StyledSkeletonElement } from 'skeletons/Skeleton.styles'
import styled from 'styled-components'

const StyledTransactionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3.7rem;
`

const StyledTransactionHeader = styled.div`
  max-width: 33rem;
  display: flex;
  align-items: center;
  width: 100%;
`

const StyledTransactionElement = styled(StyledSkeletonElement)`
  margin-top: ${({ $top }) => $top || 0};
  margin-bottom: 0;
`

export { StyledTransactionWrapper, StyledTransactionHeader, StyledTransactionElement }
