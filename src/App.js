import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  
  const rundomUserAPI = "https://randomuser.me/api";

  const [counter, setCounter] = useState(0);
  const [randomUserData, setRandomUserData] = useState('');
  const [userInfos, setUserInfos] = useState([]);
  

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
        setRandomUserData(JSON.stringify(res.data.results, null, 2) || 'No Data');
        
        setUserInfos(res.data.results);
    })

  }, []);


  const getFullUserName = (userInfo=>{
    const {name: {first, last}} = userInfo;
    const {picture: {large, medium, thumbnail}} = userInfo;

    return (
    <>
    <img src={thumbnail}></img>
    <h4>{first} {last}</h4>
    
    </>
    );

    
  });



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
          <label> 
            {
          userInfos.map((element, index)=>{
            return getFullUserName(element)
            })
          }</label>
        </p>
    </div>
  );
}

export default App;
