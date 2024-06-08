import styled from "styled-components";

import { CenteredFlexCol, CenteredFlexRow } from "../main-components";

export const OuterModal = styled(CenteredFlexCol)<{ $isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  transition: opacity 0.2s;
  opacity: ${props => props.$isVisible ? 1 : 0};
  z-index: 999;
  background-color: rgba(0,0,0,0.6);
  width: 100vw;
  height: 100vh;
  pointer-events: ${props => props.$isVisible ? 'all' : 'none'};
`

export const InnerModal = styled(CenteredFlexRow)``