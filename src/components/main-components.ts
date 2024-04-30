import { Link } from "react-router-dom"
import styled from "styled-components"

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
` 
export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
` 
export const CenteredFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
` 
export const CenteredFlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
` 
export const Title = styled.h1<{ color?: string }>`
  font-size: 2.5rem;
  color: ${props => props.color || '#000'};
`
export const SubTitle = styled.h1<{ color?: string }>`
  font-size: 1.5rem;
  color: ${props => props.color || '#000'};
`
export const Text = styled.span`
  font-size: 1.35rem;
  font-weight: normal;
`
export const Bolder = styled.span`
  font-weight: 900;
`
export const NoDecorationLink = styled(Link)`
  text-decoration: none;
`