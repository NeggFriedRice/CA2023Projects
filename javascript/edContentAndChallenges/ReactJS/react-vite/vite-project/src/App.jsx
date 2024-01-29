// import logo from './logo.svg';
import './App.css';

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

let availableDrinks = ["Orange Juice", "Mango Juice", "Orange and Mango Juice", "Water", "Black Coffee"]

function App() {
  return (
    <div className="App">
      {navPicker(1)}
      <p>Hello world!</p>
      {availableDrinks.map((drink) => {
        return <li key={"id-" + drink}>{drink}</li>
      })}
    </div>
  );
}

export default App;
