import React, { useState } from 'react'

function UserInfoForm() {

    const initialInfo = {
        name: "",
        email: "",
        linkedin: "",
        github: ""
    
      }

    const [info, setInfo] = useState(initialInfo)
    const [user, setUser] = useState(initialInfo)

    function changeHandler(event) {
        setInfo({
            ...info,
            [event.target.name]: event.target.value
        })
        // console.log(info)
    }

    function submitHandler(event) {
        event.preventDefault()
        console.log("Submit triggered")
        setUser(info)
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <label>Name:
                    <input name="name" value={info.name} onChange={changeHandler}></input>
                </label>
                <label>Email:
                    <input name="email" onChange={changeHandler}></input>
                </label>
                <label>LinkedIn:
                    <input name="linkedin" onChange={changeHandler}></input>
                </label>
                <label>GitHub:
                    <input name="github" onChange={changeHandler}></input>
                </label>
                <button type="submit">Submit</button>
            </form>
            <div>
                <h2>Name: {user.name}</h2> 
                <h2>Email: {user.email}</h2>
                <h2>LinkedIn: {user.linkedin}</h2>
                <h2>GitHub: {user.github}</h2>
            </div>
        </>
    )
}

export default UserInfoForm