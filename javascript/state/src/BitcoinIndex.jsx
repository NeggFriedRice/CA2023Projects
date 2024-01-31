import React, { useEffect, useState} from 'react'
import CurrencySelector from './CurrencySelector'


const BitcoinIndex = () => {
  let [price, setPrice] = useState('')
  let [currency, setCurrency] = useState("")

  useEffect(() => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}`)
    .then(response => response.json())
    .then(data => setPrice(data.bpi[currency].rate))
  }, [currency])
  
  return (
    <>
      <CurrencySelector setCurrency={setCurrency}/>
      <p>Current Price ({currency}): ${price}</p>
    </>
  )
}

export default BitcoinIndex