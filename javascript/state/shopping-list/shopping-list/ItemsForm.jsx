import React, { useState } from 'react'

const ItemsForm = (props) => {

    const {addItem} = props

    const initialFormState = {
        name: "",
        where: ""
    }
    
    const [formData, setFormData] = useState(initialFormState)
    
    console.log(formData)
    
    function changeHandler(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
        console.log(event.target.name)
        console.log(event.target.value)
    }

    function submitHandler(event) {
        event.preventDefault()
        addItem(formData)
    }

  return (
    <>
    <h3>Items to add</h3>
    <br></br>
    <form onSubmit={submitHandler}>
        <label>Item: 
            <input type="text" name="name" value={formData.name} onChange={changeHandler}></input>
        </label>
        <br></br>
        <label>From: 
            <input type="text" name="where" value={formData.where} onChange={changeHandler}></input>
        </label>
        <br></br>
        <button type="submit" >Submit</button>
    </form>
    </>
  )
}

export default ItemsForm