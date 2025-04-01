import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [msg, setMsg] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/message')
            .then(res => setMsg(res.data.message))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>React + Node</h1>
            <p>{msg}</p>
        </div>
    );
}

export default App;

