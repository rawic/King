import styled, { keyframes } from 'styled-components'

const loading = keyframes`
  0% { transform: translateX(-130%) }
  100% {transform: translateX(130%) }
`

const StyledShimmerWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: ${loading} 1s infinite linear;
`

const StyledShimmer = styled.div`
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  transform: skewX(-20deg);
  box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.2);
`

export { StyledShimmerWrapper, StyledShimmer }
