import { useEffect, useState } from 'react'
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

  const [updates, setUpdates] = useState([])

  useEffect(() => {
    fetch('http://localhost:4002/updates')
      .then(data => data.json())
      .then(updates => setUpdates(updates))
    })

  async function addUpdate(content) {
    const newId = updates.length
    // Create new entry object from content data
    const newUpdate = {
      activity: content.activity,
      date: content.date,
      cost: content.cost,
      notes: content.notes
    }
    
    // Send post request to server
    const response = await fetch('http://localhost:4002/updates/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUpdate)
    })
    const data = await response.json()

    setUpdates([data, ...updates])
    return newId
  }

  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ShowUpdate updates={updates}/>}></Route>
        <Route path="/updates/new" element={<UpdateForm setUpdates={setUpdates} updates={updates} addUpdate={addUpdate}/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
