import React from 'react'
import { useAppSelector } from '../../../../redux/hooks'

const SideBar:React.FC = () => {

    const { clients } = useAppSelector(state => state.application)

  return (
    <div className='w-1/5 h-full flex flex-col items-center border border-r shadow-lg'>
        <h3 className='mx-auto mt-10'>{`CLIENTE(${clients.length})`}</h3>
        <div className='w-full mt-10 px-2'>
            {
            clients.map((client:any,i:number) => (
                <button key={i} className='w-full h-[50px] text-incept-primary hover:bg-incept-primary hover:text-incept-white rounded-lg transition-all duration-150'>
                    {client.name}
                </button>
            ))
            }
        </div>
    </div>
  )
}

export default SideBar