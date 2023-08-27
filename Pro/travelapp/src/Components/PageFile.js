import "./PageFile.css";

function PageFile() {
  return (
    <div
      className="Img"
      style={{ width: "100%", height: "600px", marginTop: "80px" }}
    >
    <div style={{display:"flex",justifyContent:"space-between"}}>
      <div>
      <div className="h1_planner">
        <h1>Try Our New <br/>
        &nbsp;Manali trip <br/>
            &nbsp; planner</h1>
      </div>
      <p className="p_planner">Create a day by day itinerary <br/>
      customized to you
      </p>
      </div>
    <div className="itenary_planner"> 

     <h1 style={{color:"#e15b00",fontFamily:"sans-serif",textAlign:"center",margin: "26px 10px  26px",fontSize:"32px"}}>Itinerary planner</h1>
     <input type="text" placeholder="Enter start (country, region, or city)" className="input_field" />
     <input type="text" placeholder="Enter destination (country, region, or city)" className="input_field" />
     <input type="date" name="Date" className="input_field"/><br/>
     <input type="checkbox" className="input_checkbox"/><span>I'm travelling for work</span><br/>
     <input type="checkbox" className="input_checkbox"/><span>I'm travelling for Enjoying Holiday</span>
     <button className="input_field input_button" onClick={()=>{alert("Wait For Some Minu Searching Your Tour")}}>Search</button>
     
    </div>
    </div>
    </div>
  );
}

export default PageFile;
