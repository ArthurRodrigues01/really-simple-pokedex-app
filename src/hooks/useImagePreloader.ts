import { useEffect, useState } from "react"

export function preloadImage(src: string) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = src

    img.onload = () => resolve(img)
    img.onabort = () => reject(img)
    img.onerror = () => reject(img)
  })
}

function useImagePreloader(src: string[] | string) {
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    preload()
    
    async function preload() {
      if (Array.isArray(src)) { // a string[]
        for (const imageSrc of src) {
          await preloadImage(imageSrc)
        }
        
        setHasLoaded(true)
      } else { // just 1 src string
        await preloadImage(src)

        setHasLoaded(true)
      }
    }

    return () => setHasLoaded(false)
  }, [src])

  return { hasLoaded }
}

export default useImagePreloader