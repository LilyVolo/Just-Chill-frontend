import { useState } from 'react'
import './App.css'
import { Routes, Route} from "react-router-dom";
import CityPage from './pages/CityPage';
import PlanResultPage from './pages/PlanResultPage';
import Layout from "./components/Layout";
import HomePage from './pages/HomePage';
import SavedPlansPage from "./pages/SavedPlansPage"
import SignupPage from './pages/SignupPage'
import LogInPage from './pages/LogInPage'

function App() {


  return (
    <div>
      <Routes>
				
				<Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
				<Route path="city/:id" element= {<CityPage/>} />
        <Route path="plan" element= {<PlanResultPage/>} />
        <Route path='saved' element={<SavedPlansPage/>}> </Route>
        <Route path='signup' element={<SignupPage/>}> </Route>
        <Route path='/login' element={<LogInPage/>}> </Route>

				</Route>
			</Routes>
  </div>
  )
}

export default App
