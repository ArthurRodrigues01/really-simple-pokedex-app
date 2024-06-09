import styled from "styled-components";

import { DEVICE_QUERIES } from "../../constants/other-constants";

export const ArrowImage = styled.img`
  @media ${DEVICE_QUERIES.laptop} {
    transform: scaleX(-1) rotate(90deg);
  }
`