import { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

import HomePage from './components/pages/homepage/homepage';
import ShopPage from './components/pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot( snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });

        
      }

      this.setState({currentUser: userAuth});
      
    });
    
  };

  // if user sign out, run usubscribeFromAuth function
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    console.log(this.state);
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
