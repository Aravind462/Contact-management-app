// App.js
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Add from './pages/Add'
import Home from './pages/Home'
import Edit from './pages/Edit';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add' element={<Add/>} />
        <Route path='/edit' element={<Edit/>}/>
      </Routes>
    </>
   
  );
}

export default App;
