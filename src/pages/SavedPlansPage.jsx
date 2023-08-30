import React, {useState, useEffect} from 'react'
import axios from "axios"
import service from '../service/service';

 function SavedPlansPage() {

  const [plans, setPlans] = useState(null);



  async function takePlansForThisUser() {
    try {
      const response = await  service.get(`plans`);
      setPlans(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error, 'err');

    }
  }



  useEffect(() => {
    takePlansForThisUser();
  }, []);

  if (!plans) {
    return <div className="Loading"> Loading..</div>;
  }

  return (
    <div>
      <div>
        {plans[0].city.name}
      </div>
    </div>
  )
}

export default SavedPlansPage
    
