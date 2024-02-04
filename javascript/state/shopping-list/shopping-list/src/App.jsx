
import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemsForm from '../ItemsForm'
import ItemsList from './ItemsList'

function App() {
  const initialItems = [{
    name: "Milk",
    where: "Coles"
  },
  {
    name: "Cereal",
    where: "Aldi"
  },
  {
    name: "Levin",
    where: "NSW"
  }
]

  function addItem(item) {
    console.log(items)
    setItems([item, ...items])
  }


  const [items, setItems] = useState(initialItems)

    return (
      <>
        <h1>Shopping List Adder</h1>
        <ItemsForm addItem={addItem}/>
        <ItemsList items={items} />
      </>
    )
}

export default App
