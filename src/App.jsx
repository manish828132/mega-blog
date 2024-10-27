
import { useState,useEffect } from 'react'
//import './App.css'
import { useDispatch } from 'react-redux';
import authservice from './appwrite/auth';
import { login, logout } from './store/authSlice';
import  {Header } from './components';
import {Footer} from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading,setLoading]=useState(false);
  const dispatch=useDispatch();
  useEffect(()=>{
    authservice.getCurrentUser().then((userData)=>{
      if(userData)
      dispatch(login({userData}));
    else {
      dispatch(logout())
    }

    }).finally(()=>{
        setLoading(false);
    })
  },[])

  return (
    
      (loading)?<div>loading...</div>:<div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
        <div className='w-full block'>
          <Header></Header>
          <main>
            <Outlet></Outlet>
          </main>

          <Footer></Footer>

        </div>
        </div>
    
  )
}

export default App
