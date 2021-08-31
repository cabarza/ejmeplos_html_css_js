import { useState } from "react";
import { useHistory } from "react-router-dom";

const Counter = ({ initialValue = 0, render }) => {
    
    const history = useHistory();
    
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const back = () => {
        history.push('/vistas');
    }


    return render({ count, increment, decrement, back});
}

export default Counter;

