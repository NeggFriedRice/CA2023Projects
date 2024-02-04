function Greeting({ name='None', age=21 }) {
    return (
        <>
            <p>FR: Bonjour, {name}!</p>
            <p>ES: Hola {age}!</p>
        </>
    )
}

export default Greeting