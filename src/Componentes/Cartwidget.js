import react from  'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell} from '@fortawesome/free-solid-svg-icons';

export default function CartWidget ( ) { 
    return (
       <div classname = "app" style={{fontSize:'10em', color: 'red'}}>
       <FontAwesomeIcon icon={faBell}/>
       </div>
    );
}  