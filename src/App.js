import React from "react";
import {filterData,apiUrl} from "./data";
import Navbar from "./components/Navbar"
import Filter from "./components/Filter"
import Cards from "./components/Cards"
const App = () => {
  
  return <div>
    <Navbar></Navbar>
    <Filter filterData = {filterData}></Filter>
    <Cards></Cards>
  </div>;
};

export default App;
