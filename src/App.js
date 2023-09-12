
import './App.css';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './components/Detail';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='dashboard/details/:id' element={<Detail/>}/>
        </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
