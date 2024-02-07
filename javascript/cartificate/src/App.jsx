import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import UpdateForm from './components/UpdateForm'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  // const [count, setCount] = useState(0)

  const [updates, setUpdates] = useState([])

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/update" element={<UpdateForm setUpdates={setUpdates} updates={updates}/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
