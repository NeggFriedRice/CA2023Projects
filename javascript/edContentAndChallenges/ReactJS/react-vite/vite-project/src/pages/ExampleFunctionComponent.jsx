export default function ExampleFunctionComponent (props) {
    return (
        <div>
            <h1>Hello world, I mean {props.location}! (Function Component)</h1>
            {props.children}
        </div>
    )
}