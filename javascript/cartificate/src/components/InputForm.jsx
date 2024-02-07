import React, { useState } from 'react'

const Input = () => {

  let initialEntry = {
    activity: "",
    date: ""
  }

  let [activity, setActivity] = useState(initialEntry)
  console.log(activity)

  function changeHandler(event) {
    let { name, value } = event.target
    setActivity({...activity,
      [name]: value})
  }
  console.log(activity)

  return (
    <>
      <form>
        <h1>Activity Logger</h1>
        <h2>Activity type</h2>
        <input className="input is-rounded" type="text" name="activity" placeholder="e.g. Oil change" value={activity.name} onChange={changeHandler}/>
        <h2>Date</h2>
        <input className="input is-rounded" type="text" name= "date" placeholder="dd/mm/yy" value={activity.date} onChange={changeHandler}/>
        <h2>Receipt</h2>
        <div className="file">
          <label className="file-label">
            <input className="file-input" type="file" name="resume" />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload"></i>
              </span>
              <span className="file-label">
                Choose a file…
              </span>
            </span>
          </label>
        </div>
      </form>
    </>
  )
}

export default Input