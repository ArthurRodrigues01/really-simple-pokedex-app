import { ReactNode } from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Rotating = styled.div`
  animation: ${rotate} 1s linear infinite;
`

function Rotate({ children }: { children: ReactNode }) {
  return (
    <Rotating>
      { children }
    </Rotating>
  )
}

export default Rotate;