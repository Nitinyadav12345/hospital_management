import Home from './Pages/Home'
import './App.css';
import { Route ,Routes } from 'react-router-dom';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <div className="App " data-theme="cupcake" >
      <Routes>  
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>      
    </div>
  );
}

export default App;
