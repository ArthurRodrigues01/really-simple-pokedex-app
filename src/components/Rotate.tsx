import styled, { keyframes } from "styled-components";

import { CenteredFlexCol } from "./main-components";

const rotating = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const Rotate = styled(CenteredFlexCol)`
  animation: ${rotating} 1s linear infinite;
`

export default Rotate;