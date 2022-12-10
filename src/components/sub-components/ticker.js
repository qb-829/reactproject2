import React, { useEffect } from 'react'
import { alpaca } from '../../helpers/alpaca_api'

export default function Ticker() {

    useEffect(() => {
        quote("TSLA")
    })

    async function quote(ticker) {
        const result =  alpaca.getQuotesV2(ticker)
        .then()
        
        console.log(result);
        return result
    }

  return <>
      <div>ticker</div>
  </>

}
