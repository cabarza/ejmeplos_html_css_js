import Counter from "../controller/Counter"

const Vista2 = (props) => {
    
    return (
        <Counter initialValue={10} render={({count, increment, decrement, back}) => (
            <div>
                <button type="button" onClick={increment}>Incrementar</button>
                <button type="button" onClick={decrement}>Decrementar</button>
                <p>Count: {count}</p>
                <button type="button" onClick={back}>Volver</button>
            </div>
        )}>
        </Counter>
    )
}

export default Vista2;