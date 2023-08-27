import './TripPlanner.css'
function TripPlanner() {
    return(
        <div>
         <div className='trip'>
         <h1 style={{fontWeight:"bold",fontSize:"52px",textAlign:"center",marginBottom:"50px"}}>Trip planner benefits</h1>
         <div className='trip_div'>
            <div className='fir_div'>
            <img src='https://cdn-icons-png.flaticon.com/128/30/30537.png' style={{height:"50px",width:"50px",paddingLeft:"120px",paddingTop:"40px"}}/>
            <p style={{textAlign:"center",fontSize:"25px"}}>Add your <br/>personal  preferences,<br/> get custom recommendations</p>
            
            </div>
            <div className='sec_div'>
            <img src='https://cdn-icons-png.flaticon.com/128/69/69906.png' style={{height:"50px",width:"50px",paddingLeft:"120px",paddingTop:"42px"}}/>
            <p style={{textAlign:"center",fontSize:"25px"}}>Make the most <br/> of your trip with <br/> great tips and <br/> logistics</p>
            </div>

            <div className='thi_div'>
                <img src='https://cdn-icons-png.flaticon.com/128/9981/9981536.png' style={{height:"60px",width:"60px",paddingLeft:"120px",paddingTop:"37px"}}/>
                <p style={{textAlign:"center",fontSize:"25px"}}>All in one place</p>
            </div>
         </div>
         <div className='trip_div'>
        <div style={{height:"250px",width:"300px",border:"2px solid white"}}>
        <p style={{fontSize:"22px",fontWeight:"lighter"}}>Matches your travel preferences with over <br/> 230,000,000 data points:</p>
        <ul style={{fontWeight:"lighter",listStyleType:"circle"}}>
            <li style={{paddingBottom:"10px"}}>Best places & time to visit</li>
            <li style={{paddingBottom:"10px"}}>Reviews</li>
            <li style={{paddingBottom:"10px"}}>Transportation options</li>
            <li style={{paddingBottom:"10px"}}>Hidden gems</li>
        </ul>
        </div>
        <div style={{height:"250px",width:"300px",border:"2px solid white"}}>
        <p style={{fontSize:"22px",fontWeight:"lighter"}}>Optimizes your itinerary:</p>
        <ul style={{fontWeight:"lighter",listStyleType:"circle"}}>
            <li style={{paddingBottom:"10px"}}>Minimizes travel time</li>
            <li style={{paddingBottom:"10px"}}>Checks when attractions are open</li>
            <li style={{paddingBottom:"10px"}}>Recommends how much time to spend</li>
        </ul>
        </div>
        <div style={{height:"250px",width:"300px",border:"2px solid white"}}>
        <p style={{fontSize:"22px",fontWeight:"lighter"}}>Search Your destinations:</p>
        <ul style={{fontWeight:"lighter",listStyleType:"circle"}}>
            <li style={{paddingBottom:"10px"}}>Choose Your favourite destinations</li>
            <li style={{paddingBottom:"10px"}}>Share & collaborate with co-travelers</li>
            <li style={{paddingBottom:"10px"}}>Easy to add/revise points of interest</li>
        </ul>
        </div>
         </div>
         <button className="input_btn" onClick={()=>{alert("Wait For Some Minu Planning Your Tour")}}>Start Planning</button>

         </div>
        </div>
    )
}

export default TripPlanner;