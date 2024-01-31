import React, { useEffect, useState } from 'react'

const CurrencySelector = ({currency, setCurrency}) => {
  // const [selectValue, setSelectValue] = useState("AUD")
  // useEffect(() => setCurrency(selectValue), [selectValue])

  const [currencies, setCurrencies] = useState([])

  useEffect(() => {
    fetch('https://api.coindesk.com/v1/bpi/supported-currencies.json')
      .then(res => res.json())
      .then(data => setCurrencies(data))
  }, [])

  return (
    <select onChange={(event) => setCurrency(event.target.value)} value={currency}>
      {currencies.map(cur => <option key={cur.currency} value={cur.currency}>{cur.country}</option>)}
    </select>
  )
}

export default CurrencySelector