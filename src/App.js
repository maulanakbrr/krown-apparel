import { Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './components/pages/homepage/homepage';
import ShopPage from './components/pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';


class App extends Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {

    const {setCurrentUser} = this.props;

    // change the users were signed in, signed out or users change 
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot( snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
      
    });
    
  };

  // if user sign out, run usubscribeFromAuth function
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)}/>
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispacth => ({
  setCurrentUser: user => dispacth(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
