import React from "react";

const TaskCount = ({data}) => {
  return (
    <div className="flex justify-between gap-5 ">
      <div className="px-10 py-5 w-[45%]  bg-yellow-500 mt-10 rounded-xl">
        <h2 className="text-2xl font-semibold">{data.taskCount.newTask}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="px-10 py-5 w-[45%]  bg-blue-400 mt-10 rounded-xl">
        <h2 className="text-2xl font-semibold">{data.taskCount.active}</h2>
        <h3 className="text-xl font-medium">Active Task</h3>
      </div>
      <div className="px-10 py-5 w-[45%]  bg-green-400 mt-10 rounded-xl">
        <h2 className="text-2xl font-semibold">{data.taskCount.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>
      <div className="px-10 py-5 w-[45%]  bg-red-500 mt-10 rounded-xl">
        <h2 className="text-2xl font-semibold">{data.taskCount.failed}</h2>
        <h3 className="text-xl font-medium">Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskCount;
