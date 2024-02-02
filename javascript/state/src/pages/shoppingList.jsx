import React, { useState, useEffect } from 'react'

const ShoppingList = (props) => {

    const {addItems} = props

    const initialItems = {
        name: "",
        where: ""
    }

    const [items, setItems] = useState(initialItems)

    function changeHandler(event) {
        setItems({
            ...items,
            [event.target.name]: event.target.value
        })
    }

    function submitHandler(event) {
        event.preventDefault()
        console.log(items)
        addItems(items)
        

    }
    
  return (
    <div>
        <h1>Shopping List</h1>
        
        <form>
            <label>Item: 
                <input type="text" name="name" value={items.name} onChange={changeHandler}/>
            </label>
            <br></br>
            <label>Where: 
                <input type="text" name="where" value={items.where} onChange={changeHandler}/>
            </label>
            <br></br>
            <button type="submit" onClick={submitHandler}>Submit</button>
        </form>
        <h3>Things to buy:</h3>
        <ul id="list-space"></ul>
    </div>
  )
}

export default ShoppingList