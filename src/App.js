import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';
import Dashboard from './Component/Dashboard/Dashboard';
import User from './Component/Users/User';
import Driver from './Component/Drivers/Driver';
import Cab from './Component/Cabs/Cab';
import Customer from './Component/Customers/Customer';
import Trip from './Component/Trips/Trip';
import Login from './Component/Login/Login'
import PageNotFound404 from './Component/Page404/PageNotFound404';
import { useState } from 'react';

function App() {

  const token = sessionStorage.getItem("isAuth") || false;
  const [isAuth, setIsAuth] = useState(token);

  return (
    <div className='main'>
    {isAuth && <Header setIsAuth= {setIsAuth}/>}
    {isAuth && <Sidebar/>}
      <Routes>
        {!isAuth && <Route path='/' element={<Login setIsAuth= {setIsAuth}/>}/>}
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/users' element={<User />}/>
        <Route path='/drivers' element={<Driver />}/>
        <Route path='/cabs' element={<Cab />}/>
        <Route path='/customers' element={<Customer />}/>
        <Route path='/trips' element={<Trip />}/>
        <Route path='*' element={<PageNotFound404/>}/>
      </Routes>
    </div>
  );
}

export default App;
