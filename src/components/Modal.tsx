import { MouseEvent, ReactNode, useEffect } from "react"

import { InnerModal, OuterModal } from "./styles/modal-styles";

function Modal(
  { 
    children, 
    isModalOpen,
    setIsModalOpenFunction: setIsModalOpen
  }: { 
    children: ReactNode, 
    isModalOpen: boolean, 
    setIsModalOpenFunction: (value: boolean) => void 
  }
) {  
  
  useEffect(() => {
    const scrollBarWidth = window.innerWidth - document.body.offsetWidth
    const body = document.body 
    
    if (isModalOpen) {
      const windowHeight = window.innerHeight
      const bodyHeight = body.offsetHeight

      if (bodyHeight > windowHeight) {
        body.style.height = '100%'
        body.style.overflowY = 'hidden'
        body.style.marginRight = `${scrollBarWidth}px`
      }
    }
    
    return () => {
      body.style.height = ''
      body.style.overflow = ''
      body.style.marginRight = ``
    }
  }, [isModalOpen]);

  return (
    <OuterModal   
      $isVisible={isModalOpen}
      onClick={closeModalHandler}
    >
      <InnerModal id="innerModal">    
      { children }
      </InnerModal>  
    </OuterModal>
  )

  function closeModalHandler(e: MouseEvent) {
    const targetedElement = e.target as Element
    const isOutsideModalBox = targetedElement.closest('#innerModal') === null 
    
    if (isOutsideModalBox) {
      setIsModalOpen(false)
    }
  }
}

export default Modal