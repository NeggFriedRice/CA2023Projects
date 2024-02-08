import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UpdateForm from './components/UpdateForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ShowUpdate from './components/ShowUpdate'
import NavBar from './components/NavBar'


function App() {
  // const [count, setCount] = useState(0)
  const placeHolderUpdates = [{
    activity: "Oil change",
    date: "Feb 08 2024",
    cost: "199",
    notes: "Nothing to add"
  },
  {
    activity: "Brake rotors",
    date: "Dec 08 2023",
    cost: "459",
    notes: "Pads to be changed at next service"    
  },
  {
    activity: "Tyre rotation",
    date: "Sep 24 2023",
    cost: "172",
    notes: "Bob Jane Box Hill"    
  }
  ]

  const [updates, setUpdates] = useState(placeHolderUpdates)

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ShowUpdate updates={updates}/>}></Route>
        <Route path="/update" element={<UpdateForm setUpdates={setUpdates} updates={updates}/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
