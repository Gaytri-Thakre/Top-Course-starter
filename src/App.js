import React, { useEffect, useState } from "react";
import {filterData,apiUrl} from "./data";
import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from "./components/Cards"
import {toast} from "react-toastify"

const App = () => {
  const [courses,setCourses]=useState(null)
  useEffect( function(){
    const fetchData = async()=>{
      try{
        const response = await fetch(apiUrl);
        const output = await response.json();
        // saving data in variable
        console.log(output.data);
        setCourses(output.data);
      }
      catch(error){
        toast.error("Something went wrong")
        console.log("Error");
      }
    }
    fetchData();
  },[]);
  return <div>
    <Navbar></Navbar>
    <Filter filterData = {filterData}></Filter>
    <Cards courses = {courses}></Cards>
  </div>;
};

export default App;
