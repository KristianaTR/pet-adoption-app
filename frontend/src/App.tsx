// import "./App.css";

import AdoptPage from "@Pages/AdoptPage";
import HomePage from "@Pages/HomePage";
import DogPage from "@Pages/DogPage";
// import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes, Outlet } from "react-router-dom";
import PetDetailPage from "@Pages/PetDetailPage/PetDetailPage";
import ComingSoonPage from "@Pages/ComingSoonPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adopt" element={<AdoptPage />} />
        <Route path="/dog" element={<DogPage />} />
        <Route path="/comingSoon" element={<ComingSoonPage />} />
        <Route path="/" element={<Outlet />}>
          {/* Add a nested route for individual dogs */}
          <Route path=":dogName" element={<PetDetailPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
