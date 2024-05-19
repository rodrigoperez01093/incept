import React, { useState } from 'react'
import axios from "axios"
import { endpoints } from '../../../config/endpoints'
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { useAppDispatch } from '../../../redux/hooks';
import { setSession, setUser } from '../../../redux/features/actions/session';

const  Login: React.FC = () => {

  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });
  const [loadingFlag, setLoaginFlag] = useState(false)
console.log("ruta",  endpoints('user_login'))
  const execLogIn = async(e: React.FormEvent) => {
    e.preventDefault()
    try {
        setLoaginFlag(true)
      const data = {...userData};
      const req = await axios.post(endpoints('user_login'), data);
      console.log(req, endpoints('user_login'))
      if (typeof req.data.token === 'string' && req.data.token !== '') {
          localStorage.setItem(`logged`, 'true')
          localStorage.setItem(`user`, JSON.stringify(req.data.data));
          dispatch(setSession(true))
          dispatch(setUser(req.data))
          setLoaginFlag(false)
          navigate('/')
      }
    } catch (error) {
      console.log(error)
      setLoaginFlag(false)
    }
  }
  console.log(userData)
  return (
    <div className='w-full h-full flex flex-row items-center justify-center'>
      <div className='relative w-1/2 h-full flex items-center border'>
        <h1 className="absolute top-[80px] 2xl:top-[120px] left-[120px] 2xl:left-[300px] text-3xl 2xl:text-[48px] font-semibold">Bienvenido</h1>
        
        <form onSubmit={(e) => execLogIn(e)} className='w-[300px] 2xl:w-[400px] h-[350px] ml-[120px] 2xl:ml-[300px]'>
            <input
                onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }}
                type="text"
                className="border border-black border-opacity-50 bg-stamm-white px-3.5 h-[55px] rounded-lg text-xs w-full lg:w-[335px]"
                name="username"
                id="username"
                placeholder="Username"
            />
            <input
                onChange={(e) => { setUserData({ ...userData, password: e.target.value }) }}
                type="password"
                className="border border-black border-opacity-50 bg-stamm-white px-3.5 h-[55px] mt-5 rounded-lg text-xs w-full lg:w-[335px]"
                name="password"
                id="password"
                placeholder="Password"
            />
         
            <button type="submit" className={'bg-incept-primary place-self-center w-full text-white mt-5 rounded-lg hover:opacity-80 p-1.5 h-[55px] lg:w-[335px] flex flex-row items-center justify-center'}>
                <div className="w-1/4 h-full"></div>
                <span className="w-1/2 text-lg">Iniciar sesión</span>
                <div className="h-full flex flex-col items-start justify-center w-1/4">
                    {loadingFlag && <CircularProgress size={24} thickness={4} sx={{ color: '#F9F9F9' }}/>}
                </div>
            </button>
        </form>

      </div>
    </div>
  )
}

export default Login