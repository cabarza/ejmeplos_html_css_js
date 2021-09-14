import { useState, useEffect } from 'react';
import axios from 'axios'

const Hello = () => {
    
    const [message, setMessage] = useState('');
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/hello')
            .then(resp => setMessage(resp.data.message))
            .catch(error => console.error('Error loading message', error));
    })

    return (
        <div>
            <h1>{message}</h1>
        </div>
    )   
}

export default Hello;