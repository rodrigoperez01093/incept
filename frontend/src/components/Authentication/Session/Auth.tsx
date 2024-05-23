import React, { ReactNode, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../redux/hooks'
import Loader from '../../general/Loader/Loader'

interface AuthProps {
    children: ReactNode
  }

const Auth:React.FC<AuthProps> = ({children}:Readonly<{ children: React.ReactNode }>) => {

    const [loading, setLoading] = useState<boolean>(true)
    const location = useLocation();
    const navigate = useNavigate();
    const { logged } = useAppSelector(state => state.session);

    useEffect(() => {
      const fetchDData = () => {
        const loggedLocal:string | null = localStorage.getItem('logged');

        if(!loggedLocal || loggedLocal === 'false'){
            if(location.pathname !== '/auth/login' && location.pathname !== '/'){
              navigate('/auth/login');
            }
            else if(location.pathname === '/'){
              navigate('/auth/login');
            }
        } 
        else if(!logged){
          localStorage.setItem(`logged`, 'false');
          localStorage.setItem(`user`, JSON.stringify({}));
          navigate('/auth/login');
        }
        setLoading(false)
      }
      fetchDData()
      // eslint-disable-next-line
    }, [])
    
  if(loading){
    return <Loader />
  }

  return (
    <>
        {
            location.pathname &&
            <div className='h-screen w-full'>
                {children}
            </div>
        }
    </>
  )
}

export default Auth