import "./App.css";
import Home from "@Pages/Home";
// import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes, Navigate, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        
      </Routes>
    </div>
  );
}

export default App;
