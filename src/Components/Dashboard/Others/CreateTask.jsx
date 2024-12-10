import React from 'react'

const CreateTask = () => {
  return (
    <div className="bg-[#1c1c1c] rounded p-5 mt-7">
     <form className="flex w-full flex-wrap justify-between items-start ">
        <div className="w-1/2">
          <div>
            <h2 className="text-sm text-gray-300 mb-0.5">Task Title</h2>
            <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray mb-4" type="text" placeholder="Make a UI Design." />
          </div>

          <div>
            <h2 className="text-sm text-gray-300 mb-0.5">Date</h2>
            <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray mb-4" type="date" />
          </div>
          <div>
            <h2 className="text-sm text-gray-300 mb-0.5" >Assign to</h2>
            <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray mb-4" type="text" placeholder="Employee name"/>
          </div>
          <div>
            <h2 className="text-sm text-gray-300 mb-0.5">Category</h2>
            <input className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray mb-4" type="text" placeholder="Design Development etc." />
          </div>
        </div>
        <div className="flex flex-col items-start w-1/2">
          <h2 className="text-sm text-gray-300 mb-0.5">Description</h2>
          <textarea  className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
            placeholder="Detailed Description of task"
          ></textarea>
        <button className="bg-emerald-400 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full h-8">Create task</button>
        </div>

      </form>
     </div>
  )
}

export default CreateTask