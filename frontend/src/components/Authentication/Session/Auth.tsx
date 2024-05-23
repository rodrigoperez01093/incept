import React, { ReactNode, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../redux/hooks'
import Loader from '../../general/Loader/Loader'
import { warningAlert } from '../../global/functions/alerts'

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
          warningAlert('Your session has expired. Please log in again')
        }
        setLoading(false)
      }
      fetchDData()
      // eslint-disable-next-line
    }, [location.pathname])
    
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