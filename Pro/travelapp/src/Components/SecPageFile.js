import './SecPageFile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

function SecPageFile() {
  return (
    <div>
      <div className="Easy_Use">
        <h1 style={{fontWeight:"bold",fontSize:"52px",textAlign:"center"}}>Easy to use, easy to browse</h1>
        <div className='Div_Container'>
            <div className='Conatiner'>
            <img src="https://w7.pngwing.com/pngs/626/804/png-transparent-globe-computer-icons-globe-miscellaneous-computer-wallpaper-world-thumbnail.png" style={{height:"50px",width:"50px",paddingLeft:"75px"}} alt="image not load"/>
            <p style={{textAlign:"center",fontWeight:"bold"}}>Get a personalized trip</p>
            <p style={{textAlign:"center"}}>A full day by day itinerary based <br/> on your preferences</p>
            </div>
            <div className='Conatiner'>
            <img src="https://www.transparentpng.com/thumb/calendar/green-calendar-vector-icon-png-20.png" style={{height:"50px",width:"60px",paddingLeft:"75px"}} alt="image not load"/>
            <p style={{textAlign:"center",fontWeight:"bold"}}>Customize it</p>
            <p style={{textAlign:"center"}}>Refine your trip. We'll find the best routes and schedules</p>
            </div>
            <div className='Conatiner'>
            <img src="https://w7.pngwing.com/pngs/996/754/png-transparent-expense-management-computer-icons-corporate-travel-management-travel-blue-angle-logo.png" style={{height:"50px",width:"60px",paddingLeft:"75px"}} alt="image not load"/>
            <p style={{textAlign:"center",fontWeight:"bold"}}>Manage it</p>
            <p style={{textAlign:"center"}}>Everything in one place. Everyone on the same page.</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SecPageFile;
