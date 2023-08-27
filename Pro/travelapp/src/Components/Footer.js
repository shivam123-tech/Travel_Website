import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileRetro,faLocationPin,faClock } from '@fortawesome/free-solid-svg-icons';
function Footer(){
    return(
        <div>
        <div className='foot'>
        <div style={{display:"flex",justifyContent:"space-around",paddingLeft:"100px",paddingRight:"100px"}}>
           <div style={{width:"300px",paddingTop:"15px"}}>
            <h3>Company Info</h3>
            <p>Shivam traveling is that often you get new skills without difficulty and without even noticing it.</p>
            <img src='https://mobirise.com/extensions/travelm4/assets/images/logo.png' style={{height:"100px",width:"100px"}}/>
           </div>
           <div style={{width:"300px",paddingTop:"15px"}}>
            <h3>Contact</h3>
           <div style={{marginBottom:"20px"}}><FontAwesomeIcon icon={faMobileRetro} style={{height:"20px",width:"20px",marginRight:"8px"}}/><span>8935928697</span></div> 
           <div style={{marginBottom:"20px"}}> <FontAwesomeIcon icon={faLocationPin} style={{height:"20px",width:"20px",marginRight:"8px"}}/><span>Sansarpur, Khagaria, Bihar</span></div>
           <div style={{marginBottom:"35px"}}> <FontAwesomeIcon icon={faClock} style={{height:"20px",width:"20px",marginRight:"8px"}}/><span>Mon - Sat 8.00 - 18.00</span></div>
           <div>
            <img src='https://cdn-icons-png.flaticon.com/128/2504/2504947.png' style={{height:"30px",width:"30px",cursor:"pointer",marginRight:"10px"}} alt='not loaded'/>
            <a href="https://www.facebook.com/shivam.roy.9406417" target='blank'><img src='https://cdn-icons-png.flaticon.com/128/2504/2504903.png' style={{height:"30px",width:"30px",cursor:"pointer",marginRight:"10px"}} alt='not loaded'></img></a>
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl" target='blank'><img src='https://cdn-icons-png.flaticon.com/128/2504/2504914.png' style={{height:"30px",width:"30px",cursor:"pointer",marginRight:"10px"}} alt='not loaded'/></a>
            <a href="https://www.instagram.com/shivam_roy5550/" target='blank'><img src='https://cdn-icons-png.flaticon.com/128/2504/2504918.png' style={{height:"30px",width:"30px",cursor:"pointer",marginRight:"10px"}} alt='not loaded'/></a> 
           </div>
           </div>
        
           <div style={{width:"300px",paddingTop:"15px"}}>
           <h3>Recent Planned Trips</h3>
           <div>
            <img src='https://mobirise.com/extensions/travelm4/assets/images/010.jpg' style={{height:"90px",width:"90px",borderRadius:"10px",marginRight:"9px"}} />
            <img src='https://mobirise.com/extensions/travelm4/assets/images/021.jpg' style={{height:"90px",width:"90px",borderRadius:"10px",marginRight:"9px"}} />
            <img src='https://mobirise.com/extensions/travelm4/assets/images/032.jpg' style={{height:"90px",width:"90px",borderRadius:"10px",marginRight:"9px"}} />
           </div>
           <div>
            <img src='https://mobirise.com/extensions/travelm4/assets/images/043.jpg' style={{height:"90px",width:"90px",borderRadius:"10px",marginRight:"9px",marginTop:"5px"}} />
            <img src='https://mobirise.com/extensions/travelm4/assets/images/054.jpg' style={{height:"90px",width:"90px",borderRadius:"10px",marginRight:"9px"}} />
            <img src='https://mobirise.com/extensions/travelm4/assets/images/065.jpg' style={{height:"90px",width:"90px",borderRadius:"10px",marginRight:"9px"}} />
           </div>
           </div>
        </div>
       <div style={{background:"rgba(74,74,74,.5)",height:"1px",marginRight:"120px",marginTop:"20px",marginLeft:"90px"}}></div>
       <p style={{textAlign:"center",fontWeight:"lighter"}}>Contains information from Shivam Travel Route database, which is made available here under the Shivam Travel(visit india) Database License (STDbL).</p>
        </div>
        </div>
    )
}
export default Footer;