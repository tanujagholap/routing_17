// import logo from './logo.svg';
import './App.css';
import Navbar from './compo/layout/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './compo/pages/Home'
import Add from './compo/pages/Add'
import Show from './compo/pages/Show'
import Update from './compo/pages/Update.js'
import Delete from './compo/pages/Delete.js';



function App() {
  return (
    
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/add' element={<Add/>}></Route>
            <Route path='/show' element={<Show/>}></Route>
            <Route path='/update/:userId' element={<Update/>}></Route>
            <Route path='/delete/:userId' element={<Delete/>}></Route>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
