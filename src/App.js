import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Update from './components/Update';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      
        <Route path='/' element={<Create/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/edit/:id' element={<Update/>}></Route>
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;