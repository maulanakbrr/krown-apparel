import { useEffect } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import CheckoutPage from './pages/checkout/checkout';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import './App.scss';


const App = ({checkUserSession, currentUser}) => {
  
  useEffect( () => {
    checkUserSession();
  }, [checkUserSession])

  return (
    <div className='app'>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage}/>
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)}/>
      </Switch>
    </div>
  );
  
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state)
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
