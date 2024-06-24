import { Link } from "react-router-dom"
import styled from "styled-components"

import { DEVICE_QUERIES } from "../constants/other-constants"

export const FlexRow = styled.div<{ $gap?: number | string, $wrap?: boolean }>`
  display: flex;
  flex-direction: row;
  ${props => props.$wrap ? 'flex-wrap: wrap;' : ''}
  gap: ${(props) => props.$gap ? (typeof props.$gap === 'number' ? `${props.$gap}px` : props.$gap) : '0px'};
` 
export const FlexCol = styled.div<{ $gap?: number | string, $wrap?: boolean }>`
  display: flex;
  flex-direction: column;
  ${props => props.$wrap ? 'flex-wrap: wrap;' : ''}
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
export const GridRow = styled.div<{ $gap?: number | string }>`
  display: grid;
  grid-auto-flow: row;
  gap: ${(props) => props.$gap ? (typeof props.$gap === 'number' ? `${props.$gap}px` : props.$gap) : '0px'};
`
export const GridCol = styled.div<{ $gap?: number | string }>`
  display: grid;
  grid-auto-flow: column;
  gap: ${(props) => props.$gap ? (typeof props.$gap === 'number' ? `${props.$gap}px` : props.$gap) : '0px'};
`
export const CenteredGridRow = styled(GridRow)`
  align-items: center;  
  justify-content: center;
`
export const CenteredGridCol = styled(GridCol)`
  align-items: center;
  justify-content: center;
`
export const Title = styled.h1<{ $color?: string }>`
  font-size: 2.5rem;
  ${props => props.$color ? `color: ${props.$color};` : ''}

  @media ${DEVICE_QUERIES.tablet} {
    font-size: 2rem;
  }
  @media ${DEVICE_QUERIES.mobileL} {
    font-size: 1.7rem;
  }
`
export const EllipsedText = styled(Title)<{ $centeredText?: boolean}>`
  width: 100%;
  overflow: hidden;
  ${props => props.$centeredText ? 'text-align: center;' : ''}
  text-overflow: ellipsis;
  white-space: nowrap;
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