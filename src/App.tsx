import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';


type PropsType = {
    body: string
    id: number
    title: string
    userId: number
}


function App() {

    const [state, setState] = useState<Array<PropsType>>([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setState(json))
    }, [])

    const deleteValue = () => {
        setState([])
    }

    
    const showValue = () => {
         fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(json => setState(json)
        )
    }

    return (
        <div className="App">
            <button onClick={deleteValue}> DELETE</button> <span>    </span>
            <button onClick={showValue}> SHOW POSTS</button>
            <ul>
                {state.map((el) => {
                    return (
                        <li key={el.id}>
                            <div>{el.id}  </div>
                            <span>{el.body}  </span>
                            <span>{el.title}  </span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
