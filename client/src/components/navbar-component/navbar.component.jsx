import "./navbar.style.css";
import Logo from "../logo-component/logo.component";
import CustomButton from "../custom-button/custom-button.component";
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom'
export default function Navbar() {
  const Navlinks = [
    {
      id: 1,
      linkName: "Reactions",
      route: "/Reactions",
    },

    {
      id: 2,
      linkName: "Sports",
      route: "/Sports",
    },
    {
      id: 3,
      linkName: "Entertainment",
      route: "/Entertainment",
    },
  ];

  let history=useHistory()
  return (
    <div className="nav-container">
      <div style={{ marginLeft: "-15px" }}>
        <Logo />
      </div>
      <div style={{ display: "flex" }}>
        {Navlinks.map(({ linkName, route,id }) => {
          return (
            <Link key={id}
              to={`/category${route}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              {" "}
              <div className="link-container">{linkName}</div>
            </Link>
          );
        })}
      </div>
     
    </div>
  );
}
// <div onClick={()=>{history.push('/auth')}}>
//<CustomButton > Log In</CustomButton>
//</div>