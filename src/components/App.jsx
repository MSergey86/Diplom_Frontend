import React, {useEffect} from 'react';
import Navbar from './navbar/Navbar'
import './app.css'
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from "./authorization/Registration";
import Login from './authorization/Login';
import Disk from './disk/Disk';
import {useDispatch, useSelector} from 'react-redux';
import {auth} from '../actions/user';

function App() {
  const isAuth = useSelector(state => state.user.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(auth())
  }, [dispatch])


  return (
    <BrowserRouter>
    <div className='app'>
        <Navbar/>
        <div className='wrap'>
            {!isAuth ?
              <Routes>
                  <Route path='/registration' element={<Registration />}/>
                  <Route path='/login' element={<Login />}/>
                  <Route
                      path="*"
                      element={<Navigate to="/login" replace />}
                  />
              </Routes>
              :
              <Routes>
                  <Route exact path='/' element={<Disk />}/>
                  <Route
                      path="*"
                      element={<Navigate to="/" replace />}
                  />
              </Routes>             
            } 
        </div>
    </div>
</BrowserRouter>
  );
}

export default App;
