import React from 'react'
import Header from './Others/Header'
import TaskCount from './Others/TaskCount'
import TaskList from '../TaskList/TaskList'


function EmployeeDashboard({data}) {
  console.log(data);
  
  return (
    <div className='p-8 bg-[#1c1c1c h-screen ]'>
            <Header data={data}/>
            <TaskCount data={data}/>
            <TaskList data={data}/>
            
    </div>
  )
}

export default EmployeeDashboard