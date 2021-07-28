import Cartwidget from "./Cartwidget"
import {faComment} from "fortawesome/free-solid-svg-icons";

function icon() {
    return(
        <div className="icon" style={{fontSize:"10em", color:'blue'}}>
         <fontAwesomeIcon icon={faComment}/>   
        </div>
    )
}


export default Cartwidget