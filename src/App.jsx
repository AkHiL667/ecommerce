import React from "react";
import Home from "./assets/components/Home";
import Nav from "./assets/components/Nav";
import { Route, Routes } from "react-router-dom";
import UserDetails from "./assets/components/UserDetails";
import Category from "./assets/components/Category";
import Create from "./assets/components/Create";

function App() {
  return (
    <div className="flex flex-row">
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path= {"/userdetails/:id"} element= {<UserDetails/>} />
        <Route path="/category/:name" element={<Category/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </div>
  );
}

export default App;
