import React, { useState } from 'react'

const Demo = () => {
    const [count, setCount] = useState(0)
    const divSelect = document.querySelector("h1")

    function addDiv() {
        divSelect.innerHTML = "<li>Less than 5</li>"
    }

    return (

        <div className='tutorial'>
            <h1>Count: {count}</h1>
            <button onClick={(e) => setCount(count - 1)}>Decrement</button>
            <button onClick={(e) => {
                setCount(count + 1)
                console.log("You hit the increment button!")
                console.log({
                    xPoint: e.pageX,
                    yPoint: e.pageY
                })
            }}>Increment</button>
        </div>
    )
}

export default Demo