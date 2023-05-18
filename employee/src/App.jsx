import "./App.css";
import { useState } from "react";

import React from "react";
import Employes from "./employes";
import Header from "./header";


function App() {

  const [selectedTeam, setselectedTeam]= useState("TeamC")

  const [employees, setemployees] = useState([
    {
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA",
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA",
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB",
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB",
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC",
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC",
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD",
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD",
    },
  ]);

const handleteamSelection =(event)=> {
 console.log(event.target.value);
setselectedTeam(event.target.value)
}

const handleemployeeCardclick =(event)=> {
  const transformedEmployee=employees.map((employee)=>
    //for the employee whose id matches the target's id
   employee.id === parseInt(event.currentTarget.id)?
   (
    employee.teamName === selectedTeam?
    //if the employee is already in selected team, set his team to ''
    {...employee, teamName:''}:
    //else set his team to selected team
    {...employee, teamName:selectedTeam}
   )://for the rest of the employees
   employee)
   console.clear()
   console.table(transformedEmployee)
  setemployees(transformedEmployee)
}


  return(
<div>
    <Header
    selectedTeam={ selectedTeam}
    teamCount={employees.filter(employee=> employee.teamName===selectedTeam).length}
    />
    <Employes  
    selectedTeam={ selectedTeam}
    employees={employees}
    handleteamSelection ={handleteamSelection}
    handleemployeeCardclick={handleemployeeCardclick}
    />
</div>
  );
}
export default App;