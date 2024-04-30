import styled, { keyframes } from "styled-components";

const rotating = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Rotate = styled.span`
  animation: ${rotating} 1s linear infinite;
`

export default Rotate;