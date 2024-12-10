import React from "react";

const AcceptTask = ({data}) => {

  return (
    
    <div className="flex-shrink-0 h-full w-[20%] bg-slate-500 rounded-2xl">
      <div className="flex justify-between items-center p-3">
        <h3 className="bg-red-500 px-2 py-1 text-sm rounded-md">{data.category}</h3>
        <h3 className=" text-sm  font-bold">{data.date}</h3>
      </div>
      <h2 className="text-xl font-semibold mt-3 p-3 underline text-black">
      {data.title}
        
      </h2>
      <p className="px-4 mt-2 text-sm">
        {data.description}
      </p>
      <div className="flex justify-center mt-4 p-2 ">

        <button className="bg-green-500 py-1 px-2 m-1 text-sm rounded ">Mark as completed</button>
        <button className="bg-red-500 py-1 px-2 m-1 text-sm rounded ">Mark as failed</button>

      </div>
    </div>
  );
};

export default AcceptTask;
