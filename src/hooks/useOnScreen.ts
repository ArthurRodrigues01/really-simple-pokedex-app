import { useState, useEffect, useCallback } from "react"

function useOnScreen() {
  const [element, setElement] = useState<Element | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useCallback((node: Element | null) => {
    if (node !== null) {
      setElement(node)
    }
  }, [])


  useEffect(() => {
    const observer = new IntersectionObserver(      
      ([entry]) => setIsVisible(entry.isIntersecting), { rootMargin: '700px'})

    const currentElement = element

    if (currentElement) observer.observe(currentElement)

    return () => {
      if (currentElement) observer.unobserve(currentElement)
    }
  }, [element])

  return {
    ref: ref,
    isVisible: isVisible
  }
}

export default useOnScreen