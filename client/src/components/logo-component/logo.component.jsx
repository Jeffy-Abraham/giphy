import LogoGiphy from "../../assets/Giphy.png";
import {Link} from 'react-router-dom'
const Logo = () => {
  return (
    <div>
    <Link to='/'> <img src={LogoGiphy} width="190px" /></Link> 
    </div>
  );
};
export default Logo;
