
import './App.css';
import { Switch, Route } from "react-router-dom";
import {useEffect} from 'react'
import CategoryPage from './pages/categoryPage/category.page';
import AuthPage from './pages/authPage/authPage';
import {connect} from 'react-redux'
import FortuneCat from './pages/fortunecatPage/fortunecat';
import Profile from './components/profile-component/profile.component';

function App({currentUser}) {
  useEffect(() => {
    console.log('MOUNTED')
    
  });
  return (
    <div className="App">
   

    <Switch>
      <Route exact path='/'component={AuthPage}/>
      <Route exact path='/category/:categoryId' component={CategoryPage}/>
      <Route exact path='/Signup/newUser'component={FortuneCat}/>
      <Route exact path='/profile' component={Profile}/>

    </Switch>
  
    </div>
  );
}


const mapStateToProps = ({ user:{currentUser} }) => ({
    
  currentUser
});

export default connect(mapStateToProps, null)(App);
