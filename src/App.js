import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  
  const rundomUserAPI = "https://randomuser.me/api";

  const [counter, setCounter] = useState(0);
  const [randomUserData, setRandomUserData] = useState('');
  const [userInfos, setUserInfos] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  const  fetchRandomUserData =  (pagenum) => {
       return axios.get(rundomUserAPI + `/?${pagenum}`)
      .then((response)=>{
          //console.log(response.data.results);
          return response;
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  useEffect(()=>{

    fetchRandomUserData(0).then(res => {
        //console.log(res.data.results);
        //setRandomUserData(JSON.stringify(res.data.results, null, 2) || 'No Data');
        
        setUserInfos(res.data.results);
    })

  },[]);


  const getFullUserName = (userInfo=>{

    if ( userInfo !== undefined && userInfo !== null) 
    {
  
      console.log(userInfo);
      const {name: {first, last}} = userInfo;
      const {picture: {large, medium, thumbnail}} = userInfo;
      const {id: {name, value}} = userInfo;
      return (
      <p key={value}>
        <img src={thumbnail} alt={first}></img>
      <br />
      <label>{first} {last}</label>

      </p>
      );
    }
    
  });


  const loadMoreUser = () => {

    setPageNum(pageNum + 1);

    fetchRandomUserData(pageNum)
    .then((res)=>{

      const moreUserInfo = [...userInfos, res.data.results[0]];
      setUserInfos(moreUserInfo);

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

        
        
        <button onClick={()=> loadMoreUser()}>Load More User</button>

        
        <div>
          
            {
          userInfos.map((element, index)=>{
            return getFullUserName(element)
            })
          }
        </div>
    </div>
  );
}

export default App;
