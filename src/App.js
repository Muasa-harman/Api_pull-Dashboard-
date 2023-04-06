import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import User from './pages/User';
import Reset from './pages/Reset';
import Edit from './pages/Edit';
import List from './pages/List';

function App() {
  
  return (
    <BrowserRouter>
    <div className="app">
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/reset' element={<Reset/>}/>
        </Routes>
        <Routes>
        <Route path='/list' element={<List/>}/>
        <Route path='/edit' element={<Edit/>}/>
        <Route path='/single' element={<User/>}/>
     </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
