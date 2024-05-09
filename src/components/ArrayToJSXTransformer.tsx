import { ReactNode } from "react"

function ArrayToJSXTransformer<T>(
{ 
  dataArray, 
  transformer
}: { 
  dataArray: T[], 
  transformer: (elementData: T) => ReactNode,
}) {
  const transformed = dataArray.map((some) => transformer(some))

  return (
    <>
      {transformed}
    </>
  )
}

export default ArrayToJSXTransformer