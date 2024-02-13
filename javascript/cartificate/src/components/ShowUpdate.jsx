import React from 'react'

const ShowUpdate = ({ updates }) => {
  return (
    <>
    <div className="log-container">
      <ul>
        {updates.map((update, index) => 
          <li key={index}>
            <h3>{index + 1}. {update.activity} ${update.cost}</h3>
            <p className="update-display">{update.date}</p>
          </li>)}
      </ul>
    </div>
    </>
    
  )
}

export default ShowUpdate