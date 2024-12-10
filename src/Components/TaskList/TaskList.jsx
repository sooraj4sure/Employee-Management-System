import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  return (
    <div
      id="taskList"
      className="h-[55%] w-full mt-10 p-10 flex items-center justify-start gap-10 flex-nowrap overflow-x-auto "
    >

   {data.tasks.map((e,idx)=>{
    if(e.newTask){
      return <NewTask key={idx} data={e}/>
    }
    if(e.active){
      return <AcceptTask key={idx} data={e}/>
    }

    if(e.failed){
      return <FailedTask key={idx} data={e}/>
    }
    if(e.completed){
      return <CompleteTask key={idx} data={e}/>
    }
   })}
  
    </div>
  );
};

export default TaskList;
