import React from 'react'
import { useLocation } from 'react-router-dom';

function PlanResultPage() {
    const location = useLocation();
const data = location.state;
console.log(data, 'new page')
  return (
    <div>
    <p>Just to check</p>
    </div>
  )
}

export default PlanResultPage
