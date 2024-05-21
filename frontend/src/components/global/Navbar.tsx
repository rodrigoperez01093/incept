import React from 'react'
import { useState } from "react";
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Zoom from '@mui/material/Zoom';

import { useNavigate } from "react-router-dom";
import { resetSessionReducer } from "../../redux/features/actions/session";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const Navbar = () => {

    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const { logged } = useAppSelector(state => state.session)
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenUserMenu = (e:any) => {
        setAnchorElUser(e.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
  
    const handleSelectMenuOption = (item:any) => {
        if(item === 'Log out') {
            dispatch(resetSessionReducer());
            localStorage.setItem('logged', 'false')
            localStorage.setItem('user', '')
            navigate("/auth/login");
        } else if (item === 'Home'){
            navigate("/")
        }
    };
    
    const settings = ['Home', 'Log out'];

    
    return (
        <div className="fixed bg-incept-black text-incept-white min-w-full top-0 left-0 z-10 h-[87px] shadow-xl">
                <div className="flex h-full lg:bg-stamm-black items-center justify-between">
                    <div className="flex flex-row">
                        <div className="ml-6 text-xl">
                            <span>INCEPTIA</span>
                        </div>
                    </div>
                    { logged && 
                        <div className="flex flex-row items-center cursor-pointer">
                            <Tooltip title="Open settings" TransitionComponent={Zoom} placement="left" arrow >
                                <div className="w-11 h-11 rounded-full mr-6 flex flex-col items-center justify-center bg-gradient-to-r from-stamm-gray to-stamm-white" onClick={handleOpenUserMenu}>
                                    <span className="text-xl font-bold text-stamm-black">{`options`}</span>
                                </div>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '60px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                                >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center" onClick={() => handleSelectMenuOption(setting)}>{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>                            
                        </div>
                    }
                </div>
            </div>
    )
}

export default Navbar;