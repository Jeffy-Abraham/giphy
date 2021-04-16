
import './App.css';
import CarouselHeader from './components/carousel-header/carousel-header.component';
import Trending from './assets/trending.png'
import Navbar from './components/navbar-component/navbar.component';
import SearchBar from './components/search-bar-component/searchbar.component';
import { Switch, Route, useLocation } from "react-router-dom";
import CategoryPage from './pages/categoryPage/category.page';
import Homepage from './pages/homePage/homepage.page';
import Sigin from './components/sign-in-component/sign.component';

function App() {
  return (
    <div className="App">
   
    <Navbar/>
   
    <Switch>
      <Route exact path='/'component={Sigin}/>
      <Route exact path='/:categoryId' component={CategoryPage}/>

    </Switch>
  
    </div>
  );
}

export default App;