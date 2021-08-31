import { useContext, useEffect } from "react";
import UserContext from "../../context/context";

const LaHora = (props) => {

    const context = useContext(UserContext);

    useEffect(()=> {
        const int = setInterval(() => {
            console.log('INTERVAL')
            context.setTime(new Date().toLocaleString());
        }, 1000);


        return function clearInt() {
            console.log('FIN USE EFFECT')
            clearInterval(int);
        } 



    });

    return (
        <div>
            <h1>Fecha {context.time}</h1>

        </div>
    )
}

export default LaHora;