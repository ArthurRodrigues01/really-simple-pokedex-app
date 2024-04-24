import { ReactNode } from "react"
import styled from "styled-components"

const GrowOnHover = styled.span<{ 
  borderRadius: number, 
  borderTLRadius: number, 
  borderTRRadius: number, 
  borderBLRadius: number, 
  borderBRRadius: number 
}>`
  transition: .2s;
  border-top-right-radius: ${props => props.borderTRRadius}px;
  border-top-left-radius: ${props => props.borderTLRadius}px;
  border-bottom-right-radius: ${props => props.borderBRRadius}px;
  border-bottom-left-radius: ${props => props.borderBLRadius}px;
  ${props => props.borderRadius ? `border-radius: ${props.borderRadius}px;` : ''}
  &: hover {
    outline: 3px solid #fff;
    z-index: 999;
    transform: scale(1.2);
  }
`

function HoverableGrowthFeedback({ 
  children, 
  borderRadius,
  borderTopRightRadius,
  borderTopLeftRadius,
  borderBottomRightRadius, 
  borderBottomLeftRadius
}: { 
  children: ReactNode, 
  borderRadius?: number,
  borderTopRightRadius?: number,
  borderTopLeftRadius?: number,
  borderBottomRightRadius?: number, 
  borderBottomLeftRadius?: number
}) {
  return (
    <GrowOnHover 
      borderRadius={borderRadius ? borderRadius : 0} 
      borderBLRadius={borderBottomLeftRadius ? borderBottomLeftRadius : 0}
      borderTLRadius={borderTopLeftRadius ? borderTopLeftRadius : 0}
      borderBRRadius={borderBottomRightRadius ? borderBottomRightRadius : 0}
      borderTRRadius={borderTopRightRadius ? borderTopRightRadius : 0}
    >
      { children }
    </GrowOnHover>
  )
}

export default HoverableGrowthFeedback