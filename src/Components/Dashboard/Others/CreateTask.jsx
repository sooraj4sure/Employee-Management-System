import React, { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

const CreateTask = () => {
  const [userData, setuserData] = useContext(AuthContext);

  const [title, settaskTitle] = useState("");
  const [description, settaskDesc] = useState("");
  const [date, settaskDate] = useState("");
  const [taskAssignTo, settaskAssignTo] = useState("");
  const [category, setcategory] = useState("");

  const [newTask, setnewTask] = useState({});

  // localStorage.clear()

  const submitHandler = (event) => {
    // console.log(taskAssignTo, taskDate, taskDesc, taskTitle, category);
    event.preventDefault();

    setnewTask({
      title,
      date,
      taskAssignTo,
      description,
      category,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });

    const data = userData;

    data.forEach((elem) => {
      if (taskAssignTo == elem.firstName) {
        elem.tasks.push(newTask);
        elem.taskCount.newTask = elem.taskCount.newTask + 1;
        // elem.task.pop();
      }
      // localStorage.setItem("employee",JSON.stringify(data))
    });
    setuserData(data);
    console.log(data);
    

    setcategory("");
    settaskAssignTo("");
    settaskDate("");
    settaskDesc("");
    settaskTitle("");
  };

  return (
    <div className="bg-[#1c1c1c] rounded p-5 mt-7">
      <form
        onSubmit={submitHandler}
        className="flex w-full flex-wrap justify-between items-start "
      >
        <div className="w-1/2">
          <div>
            <h2 className="  text-sm text-gray-300 mb-0.5"> Task Title</h2>
            <input
              onChange={(event) => {
                settaskTitle(event.target.value);
              }}
              value={title}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray mb-4"
              type="text"
              placeholder="Make a UI Design."
            />
          </div>

          <div>
            <h2 className="text-sm text-gray-300 mb-0.5">Date</h2>
            <input
              onChange={(event) => {
                settaskDate(event.target.value);
              }}
              value={date}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray mb-4"
              type="date"
            />
          </div>
          <div>
            <h2 className="text-sm text-gray-300 mb-0.5">Assign to</h2>
            <input
              onChange={(event) => {
                settaskAssignTo(event.target.value);
              }}
              value={taskAssignTo}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray mb-4"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h2 className="text-sm text-gray-300 mb-0.5">Category</h2>
            <input
              onChange={(event) => {
                setcategory(event.target.value);
              }}
              value={category}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray mb-4"
              type="text"
              placeholder="Design Development etc."
            />
          </div>
        </div>
        <div className="flex flex-col items-start w-1/2">
          <h2 className="text-sm text-gray-300 mb-0.5">Description</h2>
          <textarea
            onChange={(event) => {
              settaskDesc(event.target.value);
            }}
            value={description}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
            placeholder="Detailed Description of task"
          ></textarea>
          <button className="bg-emerald-400 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full h-8">
            Create task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
