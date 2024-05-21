import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../../../../redux/hooks'
import { getInboundCases } from './functions/getInboundCases'

const Filter = () => {

    const dipatch = useAppDispatch()
    const [dateRange, setDateRange] = useState({
      from: '',
      to: ''
    })
    console.log(dateRange)
    useEffect(() => {
        if(dateRange.from !== '' && dateRange.to !== ''){
          getInboundCases(dipatch, dateRange)
        }
    }, [dateRange])
    
  return (
    <div className='h-full w-1/4 flex flex-row items-center'>
      <div className='w-1/2 flex flex-col px-4'>
        <label className='text-xs'>Desde</label>
        <input 
            type="date" 
            className='w-full h-[35px] rounded-md text-xs bg-incept-white text-left border border-incept-gray2 cursor-pointer px-2'
            name={'date'}
            onChange={(e) => setDateRange({...dateRange, from: e.target.value})}
        />
      </div>
      <div className='w-1/2 flex flex-col px-4'>
        <label className='text-xs'>Hasta</label>
        <input 
            type="date" 
            className='w-full h-[35px] rounded-md text-xs bg-incept-white text-left border border-incept-gray2 cursor-pointer px-2'
            name={'date'}
            onChange={(e) => setDateRange({...dateRange, to: e.target.value})}
        />
      </div>
    </div>
  )
}

export default Filter