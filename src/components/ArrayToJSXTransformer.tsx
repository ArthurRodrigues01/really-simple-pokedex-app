import { ReactNode } from "react"

function ArrayToJSXTransformer<T>(
{ 
  dataArray, 
  transformer
}: { 
  dataArray: T[], 
  transformer: (elementData: T, index: number) => ReactNode,
}) {
  const transformed = dataArray.map((some, index) => transformer(some, index))

  return (
    <>
      {transformed}
    </>
  )
}

export default ArrayToJSXTransformer