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
      style={{
        borderRadius: borderRadius ?? 0,
        borderBottomRightRadius: borderBottomRightRadius ?? 0,
        borderBottomLeftRadius: borderBottomLeftRadius ?? 0,
        borderTopRightRadius: borderTopRightRadius ?? 0,
        borderTopLeftRadius: borderTopLeftRadius ?? 0
      }}
    >
      { children }
    </GrowOnHover>
  )
}

export default HoverableGrowthFeedback