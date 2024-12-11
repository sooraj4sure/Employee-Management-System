import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import EmployeeDashboard from "./Components/Dashboard/EmployeeDashboard";
import Header from "./Components/Dashboard/Others/Header";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./assets/Utils/LocalStorage";
import { AuthContext } from "./Context/AuthProvider";

function App() {
  // localStorage.clear()
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  const [loggedInUserData, setloggedInUserData] = useState(null)

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setloggedInUserData(userData.data)
      
    }

  },[])
  

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
      setUser("admin");
    } else if (authData) {
    const employee = authData.employees.find((e) => email == e.email && e.password == password)
        if(employee){

          setUser("employee");
          setloggedInUserData(employee)
          localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }));
        }
    
 
    } else {
      alert("Invalid credentials");
    }
  };


  console.log(authData);

  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard changeUser={setUser}  /> : (user == "employee" ? <EmployeeDashboard changeUser={setUser}  data={loggedInUserData}/> : null)}
    </div>
  );
}

export default App;
