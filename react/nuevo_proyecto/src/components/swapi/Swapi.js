import { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/context';
import axios from 'axios';


const Swapi = (props) => {

    const context = useContext(UserContext);

    const [people, setPeople] = useState([]);
    const [url, setUrl] = useState('https://swapi.dev/api/people/');

    // useEffect(() => {
    //     fetch(url)
    //         .then(response => {
    //             console.log('RESPONSE', response);
    //             return response.json();
    //         })
    //         .then(res => {
    //             console.log('RES', res);
    //             setPeople(people.concat(res.results));
    //             if(res.next) {
    //                 setUrl(res.next);
    //             }
    //         })
    //     console.log('PROCESANDO...');
    // }, [url]);

    // useEffect(async () => {
    //     const response = await fetch(url);
    //     console.log('RESPONSE', response);
    //     const res = await response.json();
    //     console.log('RES', res);
    //     setPeople(people.concat(res.results));
    //     if(res.next) {
    //         setUrl(res.next);
    //     }
    //     console.log('PROCESANDO...');
    // }, [url]);

    useEffect(() => {
        axios.get(url)
            .then(resp => {
                console.log('AXIOS RESP', resp);
                setPeople(people.concat(resp.data.results));
                if(resp.data.next) {
                    setUrl(resp.data.next);
                }
            })
    }, [url])

    return (
        <div>
            <h1>Fecha: {context.time}</h1>
            {
                people.length > 0 && people.map((person, index) => 
                    <div key={index}>{ person.name }</div>
                )
            }
        </div>
    )
}

export default Swapi;