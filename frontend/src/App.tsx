// import "./App.css";

import AdoptPage from "@Pages/AdoptPage";
import HomePage from "@Pages/HomePage";
import DogPage from "@Pages/DogPage";
// import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes, Navigate, Outlet } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/adopt" element={<AdoptPage />}/>
        <Route path="/dog" element={<DogPage />}/>
        
      </Routes>
    </div>
  );
}

export default App;
