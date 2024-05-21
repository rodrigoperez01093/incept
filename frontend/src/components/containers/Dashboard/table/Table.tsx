import React from 'react'
import { useAppSelector } from '../../../../redux/hooks'

const Table:React.FC = () => {

    const { inboundCase } = useAppSelector(state => state.application)
    console.log("CASE", inboundCase)
  return (
    <table className='min-w-[600px] w-full border border-incept-black mb-2 text-center'>
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
            inboundCase && inboundCase?.results?.length > 0 &&
            inboundCase?.results.map((row:any,i:number) => {
                return (
                    <tbody className='xs:text-[11px] 2xl:text-xs w-full h-[25px]' key={i}>
                        {/* Gestionado */}
                        <td className='border border-incept-primary w-[200px] mx-1'>
                            {row.last_updated}
                        </td>
                        {/* ID caso */}
                        <td className='border border-incept-primary w-[200px] mx-1'>
                            {row.case_uuid}
                        </td>
                        {/* Teléfono */}
                        <td className='border border-incept-primary w-[200px] mx-1'>
                            {row.phone}
                        </td>
                        {/* Dni */}
                        <td className='border border-incept-primary w-[200px] mx-1'>
                            {row.extra_metadata.dni}
                        </td>
                        {/* Grupo */}
                        <td className='border border-incept-primary w-[200px] mx-1'>
                            {row.extra_metadata.grupo}
                        </td>
                        {/* Orden */}
                        <td className='border border-incept-primary w-[200px] mx-1'>
                            {row.extra_metadata.orden}
                        </td>
                        {/* Llamada */}
                        <td className='border border-incept-primary w-[200px] mx-1'>
                            {row.case_duration}
                        </td>
                        {/* Estado */}
                        <td className='border border-incept-primary w-[200px] mx-1'>
                            {row.case_result.name.toUpperCase()}
                        </td>
                    </tbody>
                )
            })
        }
    </table>
  )
}

export default Table