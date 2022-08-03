import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './Components/Button';

type GetType = {
    'userId': number
    'id': string
    'title': string
    'body': string

}

function App() {

  const getRequestHandler = () => {
   setGet([])

  }
  const [get, setGet] = useState<Array<GetType>>([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setGet(json))
    }, [])

  return (
    <div className="App">


      <Button nickName={'Clean Page'} callBack={getRequestHandler} />
      <p></p>
        <ul>
        {get.map(el=>{
            return (
                <li>
                    <span>{el.id} -</span>
                    <span>{el.userId} -</span>
                    <span>{el.title}</span>
                </li>
            )
        })}
        </ul>



    </div>
  );
}

export default App;
