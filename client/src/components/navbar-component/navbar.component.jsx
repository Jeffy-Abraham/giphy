import "./navbar.style.css";
import Logo from "../logo-component/logo.component";
import CustomButton from "../custom-button/custom-button.component";
import{Link} from 'react-router-dom'
export default function Navbar() {
  const Navlinks = [
    {
      id: 1,
      linkName: "Reactions",
      route: "/Reactions",
    },

    {
      id: 2,
      linkName: "Entertainment",
      route: "/Entertainment",
    },
    {
      id: 3,
      linkName: "Sports",
      route: "/Sports",
    },
    {
      id: 4,
      linkName: "Animals",
      route: "/Animals",
    },
  ];
  return (
    <div className="nav-container">
      <div style={{marginLeft:'-15px'}}>
        <Logo />
      </div>
      <div style={{display:'flex'}}>
      {Navlinks.map(({ linkName,route }) => {
        return <Link to={route} style={{textDecoration:'none' ,color:'white'}}> <div className='link-container'>{linkName}</div></Link>;
      })}
      </div>
      <div>
          <CustomButton>Log In</CustomButton>
      </div>
    </div>
  );
}
