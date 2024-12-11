import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'

export const AllTask = () => {
    const [userData,setuserData] = useContext(AuthContext)

  return (
    <div id='sc-bar' className='bg-[#1c1c1c] p-5 mt-5 rounded h-52 '  >

<div className='px-4 py-2 mb-2 bg-blue-900 flex justify-between rounded'>
    <h2 className='w-1/5 text-white-500'>Name</h2>
    <h3 className='w-1/5 text-white-500'>New Task</h3>
    <h4 className='w-1/5 text-white-500'>Active Task</h4>
    <h4 className='w-1/5 text-white-500'>Completed Task</h4>
    <h4 className='w-1/5 text-white-500'>Failed Task</h4>
</div>

<div id='sc-bar' className='overflow-auto h-[80%]'>
{userData.map(function(e,idx){
    return   <div  key={idx}className='px-4 py-2 mb-2 bg-gray-800 flex justify-between rounded border border-emerald-300'>
    <h2 className='w-1/5 text-white-500'>{e.firstName}</h2>
    <h3 className='w-1/5 text-white-700'>{e.taskCount.newTask} </h3>
    <h4 className='w-1/5 text-white-500'>{e.taskCount.active}</h4>
    <h4 className='w-1/5 text-white-500'>{e.taskCount.completed}</h4>
    <h4 className='w-1/5 text-white-500'>{e.taskCount.failed}</h4>
</div>
})}

</div>
      
    </div>
  )
}
