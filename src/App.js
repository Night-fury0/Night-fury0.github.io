import React from "react";
import { Routes, Route } from "react-router-dom";
import {Home, Privacy} from "./pages.js";

export function App() {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy-policy-chennai-weather" element={<Privacy />}/>
         </Routes>
      </div>
   );
}


export default App;
