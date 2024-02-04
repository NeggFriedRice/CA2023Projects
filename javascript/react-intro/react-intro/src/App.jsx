import "./App.css"
import Greeting from "./Greeting"

function App() {
    return (
        <>
            <h1>Hello</h1>
            <Greeting foo="bar" name="Tom" age={51} />
            <Greeting abc="123" name="Levin" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nulla at quasi aut impedit molestias hic quos soluta nam sequi possimus voluptatum saepe, fuga praesentium neque laboriosam atque incidunt expedita.</p>
            <Greeting />
        </>
    )
}

export default App