import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  
  const rundomUserAPI = "https://randomuser.me/api";

  const [counter, setCounter] = useState(0);
  const [randomUserData, setRandomUserData] = useState('');

  useEffect = (()=>{

  }, []);

  const fetchRandomUserData = () => {
      axios.get(rundomUserAPI)
      .then((response)=>{
          console.log(response.data.results);

          setRandomUserData(JSON.stringify(response.data.results));
      })
      .catch((err)=>{
        console.log(err);
      })
  }


  return (



    <div className="App">
        <p> 
          Hello React

        </p>
        <p><label>{counter}</label></p>
        <p>
          
          <button  onClick={()=>setCounter(counter+1)}>Increase Counter</button>
        </p>

        
        <p>
          <button onClick={()=>fetchRandomUserData()}>Fetch Random User</button>
        </p>

        <label>{randomUserData}</label>
    </div>
  );
}

export default App;
