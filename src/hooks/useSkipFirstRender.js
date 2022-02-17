import { useEffect, useState } from "react"

export const useSkipFirstRender = () =>  {

    const [skipFirstRender, setSkipFirstRender] = useState(false)
    
    useEffect(() => {
        setSkipFirstRender(true)
    }, [])
  
    return skipFirstRender
}