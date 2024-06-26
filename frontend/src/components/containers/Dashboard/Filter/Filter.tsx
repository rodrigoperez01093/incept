import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../../redux/hooks'
import { getInboundCases } from './functions/getInboundCases'

const Filter:React.FC = () => {

    const dipatch = useAppDispatch()
    const [dateRange, setDateRange] = useState({
      from: '',
      to: ''
    })

    useEffect(() => {
        if(dateRange.from !== '' && dateRange.to !== ''){
          getInboundCases(dipatch, dateRange)
        }
        // eslint-disable-next-line
    }, [dateRange])
    
  return (
    <div className='h-full sm:w-1/4 xs:w-full flex flex-row items-center justify-center'>
      <div className='xs:w-1/3 sm:w-1/2 flex flex-col xs:px-2 2xl:px-4'>
        <label className='text-xs font-semibold'>Desde</label>
        <input 
            type="date" 
            className='xs:w-[120px] 2xl:w-full h-[35px] rounded-md text-xs bg-incept-white text-left border border-incept-gray2 cursor-pointer px-2'
            name={'date'}
            onChange={(e) => setDateRange({...dateRange, from: e.target.value})}
        />
      </div>
      <div className='xs:w-1/3 2xl:w-1/2 flex flex-col xs:px-2 2xl:px-4'>
        <label className='text-xs font-semibold'>Hasta</label>
        <input 
            type="date" 
            className='xs:w-[120px] 2xl:w-full h-[35px] rounded-md text-xs bg-incept-white text-left border border-incept-gray2 cursor-pointer px-2'
            name={'date'}
            onChange={(e) => setDateRange({...dateRange, to: e.target.value})}
        />
      </div>
    </div>
  )
}

export default Filter