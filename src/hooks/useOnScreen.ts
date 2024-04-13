import { RefObject, useState, useEffect } from "react"

function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      }
    );

    const currentElement = ref?.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (!currentElement) return
      observer.unobserve(currentElement);
    };
  }, []);

  return {
    isVisible: isVisible
  }
}

export default useOnScreen