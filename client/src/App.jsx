import Home from './Pages/Home'
import './App.css';
import { Route ,Routes } from 'react-router-dom';
import Login from './Pages/Login';

function App() {
  return (
    <div className="App h-screen " data-theme="cupcake" >
      <Routes>  
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>      
    </div>
  );
}

export default App;
