
import './App.css';
import { Switch, Route } from "react-router-dom";
import {useEffect} from 'react'
import CategoryPage from './pages/categoryPage/category.page';
import AuthPage from './pages/authPage/authPage';
import {connect} from 'react-redux'
import FortuneCat from './pages/fortunecatPage/fortunecat';

function App({currentUser}) {
  useEffect(() => {
    console.log('MOUNTED')
    
  });
  return (
    <div className="App">
   

    <Switch>
      <Route exact path='/'component={AuthPage}/>
      <Route exact path='/:categoryId' component={CategoryPage}/>
      <Route exact path='/Signup/newUser'component={FortuneCat}/>

    </Switch>
  
    </div>
  );
}


const mapStateToProps = ({ user:{currentUser} }) => ({
    
  currentUser
});

export default connect(mapStateToProps, null)(App);
