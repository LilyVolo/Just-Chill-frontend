import { useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom";

import CityPage from "../pages/CityPage"
import Layout from "../components/Layout";
import HomePage from '../pages/HomePage';

function App() {


  return (
    <div>
      <Routes>
				
				<Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
				<Route path="city/:id" element={<CityPage/>} />
			
				</Route>
			</Routes>
  </div>
  )
}

export default App
