import React from "react";
import Header from "./Others/Header";
import CreateTask from "./Others/CreateTask";
import { AllTask } from "./AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-screen w-full p-8">
      <Header />
      <CreateTask/>
      <AllTask/>

    </div>
  );
};

export default AdminDashboard;
