import "./App.css"
import React, { useState } from 'react'
import BitcoinIndex from './BitcoinIndex'
import ShoppingList from "./pages/shoppingList.jsx"


// const ShowCount = ({ value }) => {
//   return <p>You have clicked { value } times!</p>
// }

const App = () => {

  function addItems(item) {
    setItems([item, ...items])
}


  return (
    <>
      <h1>Bitcoin Index</h1>
      {/* <BitcoinIndex /> */}
      <ShoppingList addItems={addItems}/>
    </>
  )
}

export default App




