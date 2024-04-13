import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Redirect({ destination }: { destination: string }) {
  const navigate = useNavigate()

  useEffect(() => {
    navigate(destination)
  }, [])

  return <></>
}

export default Redirect