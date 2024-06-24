"use client"

import { useEffect, useState } from "react"

export const formatter = new Intl.NumberFormat("no-NO",
    {
      style: "currency",
      currency: "NOK"
    }
  )
  
interface CurrencyProps {
    value?: string | number
}

const Currency: React.FC<CurrencyProps> = ({
    value
}) => {
    const [isMounted, setIsmounted] = useState(false)
    useEffect(() => {
        setIsmounted(true)
    }, [])

    if (!isMounted) {
        return null
    }
    return ( 
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
     );
}
 
export default Currency;