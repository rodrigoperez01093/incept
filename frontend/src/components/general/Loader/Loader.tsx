import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

const Loader:React.FC = ({size , thickness}:any) => {
    const colors = [
        '#05BCB9',
        '#167287',
        '#032133',
        '#B9C1C2',
    ];
    const [colorIndex, setColorIndex] = useState<number>(0);
    useEffect(() => {
        const interval = setInterval(() => {
          setColorIndex((prevColorIndex) => (prevColorIndex + 1) % colors.length);
        }, 1400);
        return () => clearInterval(interval);
    }, []); // eslint-disable-line
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <CircularProgress size={size??64} thickness={thickness??3} sx={{color: colors[colorIndex]}} />                
            <p className="text-center mt-5 text-stamm-black">Cargando...</p>
        </div>
    )
};

export default Loader;