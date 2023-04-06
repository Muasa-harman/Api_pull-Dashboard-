import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image from '../image/image.jpg'
import './Login.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigation = useNavigate();

  const onSubmit = (e) =>{
    try {
      
    } catch (error) {
      
    }
    toast.error('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
      console.log(onSubmit)
    e.preventDefault()
    navigation('/')
  }
  return (
    <div className='login'>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      />
      <div className='wrapper'>
      <div className='left'>
      <h1 className='loginTitle'>Lendsqr</h1>
      <div className='Image'>
        <img src={image} alt='' className='icon'/>
      </div>
      </div>
      <div className='center'>
        <div className='line'></div>
          </div>
        <div className='right'>
        <h1 className='loginTitle'>Welcome !</h1>
        <span> Enter details to login</span>
        <form onSubmit={onSubmit}>
          <input value={email} type='text' placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
          <input value={password} type='password' placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
          <button  type='submit' className='submit' onClick={onSubmit}>Login</button>
          <div className='text-center'>
            <span className='text-gray'>Forgot Password ? <Link className='link' to='/reset'>Recover Now</Link></span>
        </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Login