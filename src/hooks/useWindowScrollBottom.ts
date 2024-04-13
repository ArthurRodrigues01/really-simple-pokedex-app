import { useEffect } from 'react'

function useWindowScrollBottom(callback: () => void, deps: React.DependencyList ) {
  
  useEffect(() => {
    const eventHandler = () => {
      const pageHeight = (document.querySelector('#root') as HTMLElement).offsetHeight
      const windowHeight = window.innerHeight
      const scrolledDownPortion = Math.round(window.scrollY)

      if ((windowHeight + scrolledDownPortion) >= pageHeight) callback()
    }

    window.addEventListener('scroll', eventHandler)

    return () => window.removeEventListener('scroll', eventHandler)
  }, [...deps])
}

export default useWindowScrollBottom