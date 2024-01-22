function RandomNumber() {
  return Math.floor(Math.random() * 1000);
}

let someCoolNavbar = <nav>
  <h1>Website title goes here</h1>
  <h3>Some link to some other webpage goes here</h3>
</nav>

let someCoolFooter = <footer>
  <h4>Copyright {new Date().getUTCFullYear()}</h4>
</footer>

let availableDrinks = ["Orange Juice", "Mango Juice", "Orange and Mango Juice", "Water", "Black Coffee"];

function App() {
  return (
    <div className="App">
      {someCoolNavbar}
      <p>Hello world!</p>
      <p>Today's magic number is {RandomNumber()}</p>
      <ul>
          {availableDrinks.map((drink) => {
                return <li key={"id-"+drink}>
                    {drink}
                </li>
            }
        )}
      </ul>
      {someCoolFooter}
    </div>
  );
}

export default App;