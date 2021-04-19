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
import userProfile from "./pages/userProfile/userProfile";
import SearchPage from "./pages/searchPage/searchPage";
function App({ currentUser }) {
  console.log(currentUser);
  useEffect(() => {
    localStorage.clear()
    
  });
  return (
    <div className="App">
      <Navlink />
      <SearchBar/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/publicProfile/:id" component={PublicProfiles} />
        <Route exact path="/auth" component={AuthPage} />
        <Route exact path='/profile' component={userProfile}/>
        <Route exact path="/Signup/newUser" component={FortuneCat} />
        <Route exact path="/category/:categoryId" component={Categories} />
        <Route exact path='/search'component={SearchPage}/>
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user: { currentUser } }) => ({
  currentUser,
});

export default connect(mapStateToProps, null)(App);
