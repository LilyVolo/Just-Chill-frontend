import { useState } from 'react'
import './App.css'
import { Routes, Route} from "react-router-dom";
import CityPlanPage from '../pages/CityPlanPage';
import PlanResultPage from '../pages/PlanResultPage';
import Layout from "../components/Layout";
import HomePage from '../pages/HomePage';


function App() {


  return (
    <div>
      <Routes>
				
				<Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
				<Route path="city/:id" element= {<CityPlanPage/>} />
        <Route path="plan" element= {<PlanResultPage/>} />

				</Route>
			</Routes>
  </div>
  )
}

export default App
