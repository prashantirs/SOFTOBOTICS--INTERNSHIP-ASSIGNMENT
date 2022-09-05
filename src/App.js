import { useState } from 'react';
import './App.css';
import Login from './component/Login';
import Movie from './component/Movie';

function App() {
  const [islogin, setIslogin] = useState(false);
  
  const loginControl = (val)=>{
    setIslogin(val);
  }

  return (
    <div >
      {islogin ?  <Movie login={loginControl}/>:<Login login={loginControl}/>}    
    </div>
  );
}

export default App;
