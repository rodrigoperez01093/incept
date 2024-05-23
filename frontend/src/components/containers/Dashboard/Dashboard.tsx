import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../redux/hooks'
import { getClients } from './functions/getClients'
import SideBar from './SideBar/SideBar'
import Filter from './Filter/Filter'
import Table from './table/Table'

const Dashboard:React.FC = () => {

  const dispatch = useAppDispatch()
  const { inboundCase } = useAppSelector(state => state.application)
  const { logged } = useAppSelector(state => state.session)

  useEffect(() => {
    if(logged){
      getClients(dispatch)
    }
    // eslint-disable-next-line
  }, [])
  
  return (
    <div className='w-full h-full pt-[87px] flex xs:flex-col sm:flex-row'>
      <SideBar />
      <div className='w-full h-full overflow-y-auto'>
        <div className='w-full h-1/5'>
          <div className='w-full h-1/2 flex items-center xs:justify-center sm:justify-start px-5'>
            <h5 className='font-semibold xs:text-md 2xl:text-xl'>{`REPORTES ${inboundCase?.results?.length > 0 ? `(${inboundCase?.results?.length})` : ''}`}</h5>
          </div>
          <div className='w-full h-1/2 flex items-center justify-center 2xl:px-5'>
            <Filter />
          </div>
        </div>
        <div className='w-full h-4/5 px-5 pb-5'>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Dashboard