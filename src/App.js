import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import MealMatchPlans from "./Pages/MealMatchSection";
import MealMatchEnginePage from "./Pages/MealMatchEnginePage";


import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
         <Route
          path="/meal-match-engine"
          element={<MealMatchEnginePage />}
        />

        <Route
          path="/meal-match-plans"
          element={<MealMatchPlans />}
        />
      </Routes>
    </div>
  );
}

export default App;