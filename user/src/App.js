import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import Register from "./Brand";
import BrandsTable from "./Alldrands";






function App(){
  return(
    <BrowserRouter>
      <Routes>
      
       <Route path="/"element={<Register/>}></Route>  
       <Route path="/all"element={<BrandsTable/>}></Route> 
      
      
       </Routes>
    </BrowserRouter>
  )
}

export default App
