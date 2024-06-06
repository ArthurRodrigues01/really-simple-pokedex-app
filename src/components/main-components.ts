import { Link } from "react-router-dom"
import styled from "styled-components"

import { DEVICE_QUERIES } from "../constants/other-constants"

export const FlexRow = styled.div<{ $gap?: number | string }>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.$gap ? (typeof props.$gap === 'number' ? `${props.$gap}px` : props.$gap) : '0px'};
` 
export const FlexCol = styled.div<{ $gap?: number | string }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.$gap ? (typeof props.$gap === 'number' ? `${props.$gap}px` : props.$gap) : '0px'};
` 
export const AlignedFlexRow = styled(FlexRow)`
  align-items: center;
`
export const AlignedFlexCol = styled(FlexCol)`
  align-items: center;
`
export const JustifiedFlexRow = styled(FlexRow)`
  justify-content: center;
`
export const JustifiedFlexCol = styled(FlexCol)`
  justify-content: center;
`
export const CenteredFlexRow = styled(FlexRow)`
  justify-content: center;
  align-items: center;
` 
export const CenteredFlexCol = styled(FlexCol)`
  justify-content: center;
  align-items: center;
` 
export const Title = styled.h1<{ $color?: string }>`
  font-size: 2.5rem;
  color: ${props => props.$color || '#000'};

  @media ${DEVICE_QUERIES.tablet} {
    font-size: 2rem;
  }

  @media ${DEVICE_QUERIES.mobileL} {
    font-size: 1.7rem;
  }
`
export const SubTitle = styled(Title)`
  font-size: 1.5rem;

  @media ${DEVICE_QUERIES.tablet} {
    font-size: 1.3rem;
  }
`
export const Text = styled.span`
  font-size: 1.35rem;
  font-weight: normal;

  @media ${DEVICE_QUERIES.tablet} {
    font-size: 1.2rem;
  }
`
export const Bolder = styled.span`
  font-weight: 900;
`
export const NoDecorationLink = styled(Link)`
  text-decoration: none;
`