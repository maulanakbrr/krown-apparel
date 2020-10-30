import { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

import HomePage from './components/pages/homepage/homepage';
import ShopPage from './components/pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up';

import { auth } from './firebase/firebase.utils';

import './App.css';


class App extends Component {
  
  constructor(){
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // change the users were signed in, signed out or users change 
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      
    });
    
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    console.log(this.state.currentUser);
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
  
}

export default App;
