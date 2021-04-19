import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import FortuneCat from "./pages/fortunecatPage/fortunecat";
import Navlink from "./components/navbar-component/navbar.component";
import HomePage from "./pages/homePage/homepage.page";
import PublicProfiles from "./pages/public-profil-page/public-profile.page";
import Categories from "./components/category-route-transistion/category.route";
import AuthPage from "./pages/authPage/authPage";
import SearchBar from "./components/search-bar-component/searchbar.component";
function App({ currentUser }) {
  console.log(currentUser);
  useEffect(() => {
    console.log("MOUNTED");
  });
  return (
    <div className="App">
      <Navlink />
      <SearchBar/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/publicProfile/:id" component={PublicProfiles} />
        <Route exact path="/auth" component={AuthPage} />
        
        <Route exact path="/Signup/newUser" component={FortuneCat} />
        <Route exact path="/category/:categoryId" component={Categories} />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

export default connect(mapStateToProps, null)(App);
