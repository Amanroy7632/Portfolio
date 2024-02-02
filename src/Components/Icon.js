import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {Link} from 'react-router-dom';
function Icon({iconName,link}){
  return (
  <a  href={link}> 
  <FontAwesomeIcon icon={iconName} />
  
  </a>
  );
}
export default Icon;