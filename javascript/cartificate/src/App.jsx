/* eslint react/forbid-prop-types: 0 */

import { useEffect, useState } from 'react'
import UpdateForm from './components/UpdateForm'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import ShowUpdate from './components/ShowUpdate'
import NavBar from './components/NavBar'
import SingleUpdate from './components/SingleUpdate'


function App() {

  const [updates, setUpdates] = useState([])

  useEffect(() => {
    fetch('http://localhost:4002/updates')
      .then(data => data.json())
      .then(updates => setUpdates(updates))
    }, [])


  async function deleteUpdate(id) {

    let toDeleteUpdateId = null

    await fetch(`http://localhost:4002/updates/${id}`)
    .then(data => data.json())
    .then(response => toDeleteUpdateId = response._id)
    
    console.log(toDeleteUpdateId)

    await fetch(`http://localhost:4002/updates/${toDeleteUpdateId}`, {method: 'DELETE'})
  }

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

    setUpdates([...updates, data])
    return newId
  }

  const UpdateWrapper = ({deleteUpdate}) => {
    const { id } = useParams()
    return <SingleUpdate update={updates[id]} id={id} deleteUpdate={deleteUpdate} updates={updates} setUpdates={setUpdates}/>
  }


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ShowUpdate updates={updates}/>}></Route>
          <Route path="/updates/new" element={<UpdateForm setUpdates={setUpdates} updates={updates} addUpdate={addUpdate}/>}></Route>
          <Route path='/updates/:id' element={<UpdateWrapper deleteUpdate={deleteUpdate} updates={updates} setUpdates={setUpdates}/>} />
          
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
