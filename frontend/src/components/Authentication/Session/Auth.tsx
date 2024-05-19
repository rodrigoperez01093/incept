import React, { ReactNode, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

interface AuthProps {
    children: ReactNode
  }

const Auth:React.FC<AuthProps> = ({children}:Readonly<{ children: React.ReactNode }>) => {

    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
      const fetchDData = () => {
        const logged:string | null = localStorage.getItem('logged')

        if(!logged || logged === 'false'){
            if(location.pathname === '/'){
                navigate('auth/login')
            }
        }
      }
      fetchDData()
      // eslint-disable-next-line
    }, [])
    

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