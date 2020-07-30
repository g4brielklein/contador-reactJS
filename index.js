const container = document.querySelector("#App")

// const App = React.createElement("h2", null, "Contador com React")

function App(props) {

    const [contagem, setContagem] = React.useState(0)

    function increment() {
        setContagem(anterior => anterior + 1)
    }

    function decrement() {
        setContagem(anterior => anterior - 1)
    }

    return (<div className="contador">
        <h2>{props.title}</h2>
        <h3>{contagem}</h3>
        <div>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
        </div>)
}

ReactDOM.render(
    <App title="contador"></App>
    , container)