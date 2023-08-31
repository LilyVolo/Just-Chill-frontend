import  {useState, useEffect} from 'react'
import service from '../service/service';
import './SavedPlansPage.css'
// import Note from "../components/Note";
import AddNote from "../components/AddNote";
import Note from "../components/Note";

 function SavedPlansPage() {

  const [plans, setPlans] = useState(null);
  const [shouldFetch, setShouldFetch] = useState(true);

  const handleAddNote = async () => {};


  async function takePlansForThisUser() {
    try {
      const response = await  service.get(`plans`);
      setPlans(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error, 'err');

    }
  }

console.log(plans)

  useEffect(() => {
    takePlansForThisUser();
  }, []);

  if (!plans) {
    return <div className="Loading"> Loading..</div>;}
  

    return (
      <div className='container-saved-plans'>
        {plans.map((plan) => {
          // const {plan} = plan; // Обратите внимание на исправленные деструктуризации
          return (
            <div key={plan._id} className="each-card">
              <div className="plan-note-card">
                <h2>{plan.city.name}</h2>
                <img
                  className="plan-img"
                  src={`../public/paris/${plan.city.img1}`}
                  alt=""
                />
                <h2>тут будет текст</h2>
                <p></p>
                <p>We propose you to visit {plan.places[0].name} to make yor body relaxed:</p>
    <p> rating of the place: {plan.places[0].rating} </p>
    <p>adress: {plan.places[0].formatted_address}</p>
               
              </div>
              <div className='note-container'> 
              <div className='note-container-wrapper'> 
               <Note
                shouldFetch={shouldFetch}
                setShouldFetch={setShouldFetch}
                planId={plan._id}
                userId={plan.user}
          />  
              <AddNote
                setShouldFetch={setShouldFetch}
                handleAddNote={handleAddNote}
                planId={plan._id}
                userId={plan.user} // Исправлено plan.id на _id
              /> 
              </div>
                   </div>
            </div>
          );
        })}
      </div>
    );
  }
  
  export default SavedPlansPage;