
import './App.css';
import { Switch, Route } from "react-router-dom";
import {useEffect} from 'react'
import CategoryPage from './pages/categoryPage/category.page';
import AuthPage from './pages/authPage/authPage';
import {connect} from 'react-redux'

function App({currentUser}) {
  useEffect(() => {
    
  });
  return (
    <div className="App">
   

    <Switch>
      <Route exact path='/'component={AuthPage}/>
      <Route exact path='/:categoryId' component={CategoryPage}/>

    </Switch>
  
    </div>
  );
}


const mapStateToProps = ({ user:{currentUser} }) => ({
    
  currentUser
});

export default connect(mapStateToProps, null)(App);
