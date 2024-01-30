// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

let someCoolNavbar = <nav>
  <h1>Website title goes here</h1>
  <h3>Some link to some other webpage goes here</h3>
</nav>

let someOtherCoolNavbar = <nav>
  <h1>Replacement Nav</h1>
  <h3>Replacement links</h3>
</nav>

function navPicker(number) {
  if (number < 5) {
    return someCoolNavbar
  } else {
    return someOtherCoolNavbar
  }
}

function DrinksList(props) {
  return (
    <ul>
      {props.availableDrinks.map(drink => {
        return <li key={"id-"+drink}>{drink}</li>
      })}
    </ul>
  )
}

function App(props) {
//   let availableDrinks = ["Orange Juice", "Mango Juice", "Orange and Mango Juice", "Water", "Black Coffee"]

//   return (
//     <div className="App" style={{backgroundColor: "grey", fontSize: 24, color:"blue"}}>
//       {navPicker(1)}
//       <p>Hello world!</p>
//       <DrinksList availableDrinks={["Orange Juice", "Mango Juice", "Orange and Mango Juice", "Water", "Black Coffee"]}/>
//       {availableDrinks.map((drink) => {
//         return <li key={"id-" + drink}>{drink}</li>
//       })}
//     </div>
//   );
// }

// YouTube video tutorial: https://www.youtube.com/watch?v=O6P86uwfdR0

  const [count, setCount] = useState(4)

  function decrementCount() {
    setCount(previousCount => previousCount - 1)
  }

  function incrementCount() {
    setCount(previousCount => previousCount + 1)
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <button>{count}</button>
      <button onClick={incrementCount}>+</button>
    </>
  )
}

export default App;
