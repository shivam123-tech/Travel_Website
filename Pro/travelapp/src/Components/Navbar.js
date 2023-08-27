import "./Navbar.css";
import favouriteImage from '../image/favourite.png';
import  logo from '../image/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { faListDots} from '@fortawesome/free-solid-svg-icons';
import SearchBar from "../SearchBar";

function Navbar() {

  return (
    <div>
      <div className="Navbar">
        <span style={{float:"left",padding:"10px",paddingRight:"10px"}}>
          <img
            src={logo}
            alt="logo"
            style={{ maxHeight: "47px", maxWidth: "200px" }}
          />
          
        </span>
       
        <span
          style={{
            color: "#e15b00",
            float: "left",
            borderLeft:"2px solid #e15b00",
            padding: "15px 0px 1px 20px",
            fontweight: "700",
            lineheight: "18px",
            verticalAlign:"middle",
            
            
          }}
        >
             
          Plan Your Holiday<br />
          With me
        </span>
       <span><SearchBar /></span> 
        <img src={favouriteImage} className="icon-container .icon-container:hover" alt="Logo" style={{height:"35px",width:"35px",cursor:"pointer"}} />
        <FontAwesomeIcon icon={faListDots} className="icon-container .icon-container:hover" style={{marginLeft:"40px",height:"30px",width:"30px",cursor:"pointer"}}/>
        <FontAwesomeIcon icon={faQuestion} className="icon-container .icon-container:hover" style={{marginLeft:"40px",height:"30px",width:"30px",border:"2px solid black",borderRadius:"50%",cursor:"pointer"}}/>
        <span className="Login icon-container .icon-container:hover">Login</span>
      </div>
    </div>
  );
}

export default Navbar;
