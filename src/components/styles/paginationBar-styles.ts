import styled from "styled-components"

import { DEVICE_QUERIES } from "../../constants/other-constants"
import { CenteredFlexRow, NoDecorationLink } from "../main-components"

export const PaginationCell = styled(NoDecorationLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: .2s;
  background-color: #fff;
  padding: 1.2rem;
  width: 2rem;
  height: 2rem;
  color: #000;
  font-size: 1.3rem;
  font-weight: 600;
  
  &:hover {
    background-color: #d4d4d4;
  }
  &: first-child {
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
  }
  &: last-child {
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }

  @media ${DEVICE_QUERIES.tablet} {
    width: 1.2rem;
    height: 1.2rem;
  }

  @media ${DEVICE_QUERIES.mobileL} {
    padding: 0.8rem;
    font-size: 1rem;
  }
`
export const PaginationCellCurrent = styled(CenteredFlexRow)`
  transition: .2s;
  background-color: #fff;
  cursor: not-allowed;
  padding: 1.2rem;
  width: 2rem;
  height: 2rem;
  color: #000;
  user-select: none;

  &:hover {
    background-color: #d4d4d4;
  }
  &: first-child {
    border-top-left-radius: 1000px;
    border-bottom-left-radius: 1000px;
  }
  &: last-child {
    border-top-right-radius: 1000px;
    border-bottom-right-radius: 1000px;
  }

  @media ${DEVICE_QUERIES.tablet} {
    width: 1.2rem;
    height: 1.2rem;
  }

  @media ${DEVICE_QUERIES.mobileL} {
    padding: 0.8rem;
  }
`

export const PokeballImg = styled.img`
  width: 1.7rem;
  height: 1.7rem;

  @media ${DEVICE_QUERIES.mobileL} {
    width: 1.5rem;
    height: 1.5rem;
  }
`