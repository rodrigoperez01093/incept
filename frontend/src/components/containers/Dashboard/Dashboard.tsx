import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../redux/hooks'
import { getClients } from './functions/getClients'
import SideBar from './SideBar/SideBar'
import Filter from './Filter/Filter'
import Table from './table/Table'

const Dashboard:React.FC = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    getClients(dispatch)
  }, [])
  
  return (
    <div className='w-full h-full pt-[87px] flex flex-row'>
      <SideBar />
      <div className='w-full h-full'>
        <div className='w-full h-1/5'>
          <div className='w-full h-1/2 flex items-center px-5'>
            <h5>REPORTES</h5>
          </div>
          <div className='w-full h-1/2 flex items-center justify-between px-5'>
            <span>Detalles</span>
            <Filter />
          </div>
        </div>
        <div className='w-full h-4/5 px-5'>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Dashboard