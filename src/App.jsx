import { useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom";
// import 'dotenv/config'
import CityPlanPage from '../pages/CityPlanPage';
import Layout from "../components/Layout";
import HomePage from '../pages/HomePage';

function App() {


  return (
    <div>
      <Routes>
				
				<Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
				<Route path="city/:id" element= {<CityPlanPage/>} />

				</Route>
			</Routes>
  </div>
  )
}

export default App
