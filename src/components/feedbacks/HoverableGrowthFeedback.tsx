import { ReactNode } from "react"
import styled from "styled-components"

const GrowOnHover = styled.span`
  transition: .2s;
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
    style={borderRadius ? {
        borderRadius: borderRadius ?? 'initial',
      } : {
        borderBottomRightRadius: borderBottomRightRadius ?? 'initial',
        borderBottomLeftRadius: borderBottomLeftRadius ?? 'initial',
        borderTopRightRadius: borderTopRightRadius ?? 'initial',
        borderTopLeftRadius: borderTopLeftRadius ?? 'initial'
      }}
    >
      { children }
    </GrowOnHover>
  )
}

export default HoverableGrowthFeedback