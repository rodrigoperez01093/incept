import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './components/containers/Dashboard/Dashboard';
import Auth from './components/Authentication/Session/Auth';
import Login from './components/Authentication/Session/Login';
import Providers from './redux/Provider';
import Navbar from './components/global/Navbar';

const App:React.FC = () => {
  return (
    <>
        <Providers>
            <BrowserRouter>
                <Auth>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/auth/login" element={<Login />} />
                    </Routes>    
                </Auth>
            </BrowserRouter>    
        </Providers>
    </>
  )
}

export default App