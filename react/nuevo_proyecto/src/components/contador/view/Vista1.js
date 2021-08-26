import Counter from "../controller/Counter"

const Vista1 = (props) => {

    return (
        <Counter initialValue={5} render={({ count, increment, decrement }) => (
            <div>
                <h1>Contador: {count}</h1>
                <button type="button" onClick={increment}>Incrementar</button>
                <button type="button" onClick={decrement}>Decrementar</button>
            </div>
        )}>
        </Counter>
    )   
}

export default Vista1;