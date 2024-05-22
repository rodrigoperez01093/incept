import React, { useState } from 'react'
import { useAppSelector } from '../../../../redux/hooks'
import Conversation from '../Conversation/Conversation';

const Table:React.FC = () => {

    const { inboundCase } = useAppSelector(state => state.application)
    const [open, setOpen] = useState<boolean>(false);
    const [messages, setMessages] = useState<any>();
  return (
    <>
    
        <table className='min-w-[600px] w-full h-full border border-incept-black mb-2 xs:mt-2 2xl:mt-0 text-center flex-auto overflow-y-hidden relative'>
            <thead>
                <tr className='w-full border border-incept-black bg-incept-primary text-incept-white xs:text-xs 2xl:text-[16px] h-[26px]'>
                    <th className='px-1'>Gestionado</th>
                    <th className='px-1'>ID caso</th>
                    <th className='px-1'>Teléfono</th>
                    <th className='px-1'>Dni</th>
                    <th className='px-1'>Grupo</th>
                    <th className='px-1'>Orden</th>
                    <th className='px-1'>Llamada</th>
                    <th className='px-1'>Estado</th>
                </tr>
            </thead>
            {
                inboundCase && inboundCase?.results?.length > 0 ?
                inboundCase?.results.map((row:any,i:number) => {
                    return (
                        <tbody className={`xs:text-[11px] 2xl:text-xs w-full h-[25px] hover:bg-incept-blue2 ${messages === row.case_log && open && 'bg-incept-blue2'} cursor-pointer transition-all ease-in-out duration-100`} key={i} onClick={() => {setOpen(true); setMessages(row.case_log)}}>
                            {/* Gestionado */}
                            <td className='border border-incept-primary w-[150px] h-full'>
                                <div className='flex flex-row items-center justify-center'>
                                    <svg className='mr-2' width="20" height="20" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1" y="3" width="26" height="20" rx="3" stroke="#828282" stroke-width="2" stroke-linejoin="round"/>
                                        <path d="M7 1V5" stroke="#828282" stroke-width="2" stroke-linecap="round"/>
                                        <path d="M21 1V5" stroke="#828282" stroke-width="2" stroke-linecap="round"/>
                                        <rect x="5" y="10" width="3" height="3" fill="#828282"/>
                                        <rect x="5" y="14" width="3" height="3" fill="#828282"/>
                                        <rect x="5" y="18" width="3" height="3" fill="#828282"/>
                                        <rect x="10" y="10" width="3" height="3" fill="#828282"/>
                                        <rect x="10" y="14" width="3" height="3" fill="#828282"/>
                                        <rect x="10" y="18" width="3" height="3" fill="#828282"/>
                                        <rect x="15" y="10" width="3" height="3" fill="#828282"/>
                                        <rect x="15" y="14" width="3" height="3" fill="#828282"/>
                                        <rect x="15" y="18" width="3" height="3" fill="#828282"/>
                                        <rect x="20" y="10" width="3" height="3" fill="#828282"/>
                                        <rect x="20" y="14" width="3" height="3" fill="#828282"/>
                                        <rect x="20" y="18" width="3" height="3" fill="#828282"/>
                                        <path d="M1 6C1 4.34315 2.34315 3 4 3H24C25.6569 3 27 4.34315 27 6V8H1V6Z" stroke="#828282" stroke-width="2"/>
                                    </svg>
                                    {row.last_updated}
                                </div>
                            </td>
                            {/* ID caso */}
                            <td className='border border-incept-primary w-[100px] mx-1'>
                                {row.case_uuid}
                            </td>
                            {/* Teléfono */}
                            <td className='border border-incept-primary w-[100px] mx-1'>
                                {row.phone}
                            </td>
                            {/* Dni */}
                            <td className='border border-incept-primary w-[100px] mx-1'>
                                {row.extra_metadata.dni}
                            </td>
                            {/* Grupo */}
                            <td className='border border-incept-primary w-[100px] mx-1'>
                                {row.extra_metadata.grupo}
                            </td>
                            {/* Orden */}
                            <td className='border border-incept-primary w-[100px] mx-1'>
                                {row.extra_metadata.orden}
                            </td>
                            {/* Llamada */}
                            <td className='border border-incept-primary w-[150px] h-full mx-1'>
                                <div className='flex flex-row items-center justify-center'>
                                    <svg className='mr-2' width="18" height="18" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12.4612" cy="12" r="11.0769" stroke="#828282" stroke-width="1.77231"/>
                                        <path d="M12.4614 3.1384V1.36609" stroke="#828282" stroke-width="1.77231" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.4614 22.1908V20.4185" stroke="#828282" stroke-width="1.77231" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M21.3229 12L23.0952 12" stroke="#828282" stroke-width="1.77231" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M2.27066 12L4.04297 12" stroke="#828282" stroke-width="1.77231" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M18.7277 5.73405L19.981 4.48083" stroke="#828282" stroke-width="1.77231" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M5.25558 19.206L6.50879 17.9528" stroke="#828282" stroke-width="1.77231" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M18.7277 18.266L19.981 19.5192" stroke="#828282" stroke-width="1.77231" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M5.25558 4.79403L6.50879 6.04724" stroke="#828282" stroke-width="1.77231" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.4614 6.23999V12H16.4491" stroke="#828282" stroke-width="1.77231" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    {row.case_duration}
                                </div>
                            </td>
                            {/* Estado */}
                            <td className='border border-incept-primary w-[200px] mx-1'>
                                {row.case_result.name.toUpperCase()}
                            </td>
                        </tbody>
                    )
                })
                :
                <div className='absolute top-[30%] xs:text-[11px] 2xl:text-lg w-full h-[25px]'>
                    <span>No hay información para mostrar</span>
                </div>
            }
        </table>
        <Conversation 
            open={open} 
            setOpen={setOpen} 
            messages={messages}
        />
    </>
  )
}

export default Table