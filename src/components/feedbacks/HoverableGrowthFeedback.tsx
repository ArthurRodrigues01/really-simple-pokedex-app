import styled from "styled-components"

const HoverableGrowthFeedback = styled.span<{
  $borderRadius?: string | number;
  $borderTopLeftRadius?: string | number;
  $borderTopRightRadius?: string | number;
  $borderBottomLeftRadius?: string | number;
  $borderBottomRightRadius?: string | number;
  $growthScale?: number;
  $outline?: boolean;
}>`
  ${ props => props.$borderRadius ? `
    border-radius: ${props.$borderRadius ? typeof props.$borderRadius === 'string' ? props.$borderRadius : `${props.$borderRadius}px` : 'initial'};
    ` : `
    border-top-left-radius: ${props.$borderTopLeftRadius ? typeof props.$borderTopLeftRadius === 'string' ? props.$borderTopLeftRadius : `${props.$borderTopLeftRadius}px` : 'initial'};
    border-top-right-radius: ${props.$borderTopRightRadius ? typeof props.$borderTopRightRadius === 'string' ? props.$borderTopRightRadius : `${props.$borderTopRightRadius}px` : 'initial'};
    border-bottom-left-radius: ${props.$borderBottomLeftRadius ? typeof props.$borderBottomLeftRadius === 'string' ? props.$borderBottomLeftRadius : `${props.$borderBottomLeftRadius}px` : 'initial'};
    border-bottom-right-radius: ${props.$borderBottomRightRadius ? typeof props.$borderBottomRightRadius === 'string' ? props.$borderBottomRightRadius : `${props.$borderBottomRightRadius}px` : 'initial'};`
  }

  transition: .2s;
  outline: 0px solid #fff;
  &: hover {
    ${props => props.$outline ? 'outline: 3px solid #fff' : ''};
    z-index: 999;
    transform: scale(${props => props.$growthScale ?? '1.2'});
  }
`

export default HoverableGrowthFeedback