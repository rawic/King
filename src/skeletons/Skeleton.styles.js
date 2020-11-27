import styled, { css } from 'styled-components'

const StyledSkeletonWrapper = styled.div`
  position: relative;
  overflow: hidden;
`

const StyledSkeletonElement = styled.div`
  background-color: #eee;
  margin-top: ${({ $top }) => $top || '1rem'};
  margin-bottom: 1rem;
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '2rem'};

  ${({ $right }) =>
    $right &&
    css`
      margin-right: ${$right};
    `}
  ${({ $circle }) =>
    $circle &&
    css`
      width: 4.8rem;
      height: 4.8rem;
      border-radius: 50%;
    `}
  ${({ $radius }) =>
    $radius &&
    css`
      border-radius: ${$radius};
    `};
`

export { StyledSkeletonWrapper, StyledSkeletonElement }
