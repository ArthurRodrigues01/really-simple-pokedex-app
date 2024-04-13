import { useLocation } from "react-router-dom"

function useURLSearchParams() {
  const searchParamsRaw = useLocation().search
  const searchParams = [...new URLSearchParams(searchParamsRaw).entries()]
  const searchParamsObject = Object.fromEntries(searchParams)

  return searchParamsObject
}

export default useURLSearchParams