import { useContext, useEffect, useState } from 'react';
import UserContext from '../../context/context';
import axios from 'axios';


const Swapi = (props) => {

    const context = useContext(UserContext);

    const [people, setPeople] = useState([]);
    const [url, setUrl] = useState('');

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
        if(url) {
            axios.get(url)
                .then(resp => {
                    console.log('AXIOS RESP', resp);
                    setPeople(people.concat(resp.data.results));
                    if(resp.data.next) {
                        setUrl(resp.data.next);
                    }
                })
        }
    }, [url])

    const cargar = (e) => {
        cargarPaginaSwapi('https://swapi.dev/api/people/', []);
    }

    const cargarPaginaSwapi = (urlSwapi, data) => {
        axios.get(urlSwapi)
                .then(resp => {
                    console.log('AXIOS RESP', resp);
                    data = data.concat(resp.data.results);
                    if(resp.data.next) {
                        cargarPaginaSwapi(resp.data.next, data);
                    } else {
                        setPeople(data);
                    }
                })
    }

    return (
        <div>
            <h1>Fecha: {context.time}</h1>
            <button type="button" onClick={cargar}>Cargar</button>
            {
                people.length > 0 && people.map((person, index) => 
                    <div key={index}>{ person.name }</div>
                )
            }
        </div>
    )
}

export default Swapi;