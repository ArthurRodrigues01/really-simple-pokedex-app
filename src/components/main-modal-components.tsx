import { ReactNode, useEffect } from "react"
import styled, { keyframes } from "styled-components"

import { CenteredFlexCol, CenteredFlexRow } from "./main-components"

const FadeInAnimation = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
const ModalBackground = styled(CenteredFlexCol)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0,0,0,0.6);
  width: 100vw;
  height: 100vh;
  animation: ${FadeInAnimation} linear 0.1s;
`

const ModalBox = styled(CenteredFlexRow)`
  position: fixed;
  top: 0; 
  left: 0;
  z-index: 1000;
  margin-top: 20vh;
  margin-left: 25vw;
  animation: ${FadeInAnimation} linear 0.1s;
`


export const Modal = ({ children, setIsModalOpen }: { children: ReactNode, setIsModalOpen: (value: boolean) => void }) => {  
  let scrollBarWidth = window.innerWidth - document.body.offsetWidth
  
  useEffect(() => {
    const windowHeight = window.innerHeight
    const bodyHeight = document.body.offsetHeight

    if (bodyHeight > windowHeight) {
      document.body.style.height = '100%'
      document.body.style.overflowY = 'hidden'
      document.body.style.marginRight = `${scrollBarWidth}px`
    }
    
    return () => {
      document.body.style.height = ''
      document.body.style.overflow = ''
      document.body.style.marginRight = ``
    }
  }, []);

  return (
    <>
    <ModalBackground onClick={() => setIsModalOpen(false)}/>
      <ModalBox $gap={'5rem'}>
      { children }
      </ModalBox>
    </>
  )
}