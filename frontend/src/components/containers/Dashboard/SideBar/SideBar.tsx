import React from 'react'
import { useAppSelector } from '../../../../redux/hooks'

const SideBar:React.FC = () => {

    const { clients } = useAppSelector(state => state.application)

  return (
    <div className='w-1/5 h-full flex flex-col items-center'>
        <h3 className='mx-auto mt-10'>CLIENTS</h3>
        <div className='w-full mt-10 px-2'>
            {
            clients.map((client:any,i:number) => (
                <button key={i} className='w-full h-[50px] bg-incept-primary text-incept-white rounded-lg'>
                    {client.name}
                </button>
            ))
            }
        </div>
    </div>
  )
}

export default SideBar