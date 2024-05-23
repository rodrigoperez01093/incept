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
import { Avatar } from '@mui/material';
import { resetApplicationReducer } from '../../redux/features/actions/application';

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
  
    const handleSelectMenuOption = (item:string) => {
        if(item === 'Log out') {
            dispatch(resetSessionReducer());
            dispatch(resetApplicationReducer());
            localStorage.setItem('logged', 'false')
            localStorage.setItem('user', '')
            navigate("/auth/login");
        } else if (item === 'Home'){
            navigate("/")
        }
    };
    
    const settings = ['Log out'];

    
    return (
        <div className="fixed bg-incept-black text-incept-white min-w-full top-0 left-0 z-10 xs:h-[65px] 2xl:h-[87px] shadow-xl">
                <div className="flex h-full lg:bg-stamm-black items-center justify-between">
                    <div className="flex flex-row">
                        <div className="ml-6 text-xl">
                            <span>INCEPTIA</span>
                        </div>
                    </div>
                    { logged && 
                        <div className="flex flex-row items-center cursor-pointer">
                            <Tooltip title="Open settings" TransitionComponent={Zoom} placement="left" arrow >
                                <Avatar sx={{ bgcolor: 'deepOrange', mr: 4 }} alt="incept ai" onClick={handleOpenUserMenu} />
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