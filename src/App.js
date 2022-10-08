import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  
  const rundomUserAPI = "https://randomuser.me/api";

  const [counter, setCounter] = useState(0);
  const [randomUserData, setRandomUserData] = useState('');

  

  const  fetchRandomUserData =  () => {
       return axios.get(rundomUserAPI)
      .then((response)=>{
          console.log(response.data.results);
          return response;
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  useEffect(()=>{
    
    fetchRandomUserData().then(res => {
        console.log(res.data.results);
        setRandomUserData(JSON.stringify(res.data.results) || 'No Data');

    })

  }, []);


  return (



    <div className="App">
        <p> 
          Hello React

        </p>
        <p><label>{counter}</label></p>
        <p>
          
          <button  onClick={()=>setCounter(counter+1)}>Increase Counter</button>
        </p>

        
        

        <label>User: {randomUserData}</label>
    </div>
  );
}

export default App;
