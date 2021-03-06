import { useEffect, lazy, Suspense } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './components/header/header';
import Spinner from './components/spinner/spinner';
import ErrorBoundary from './components/error-boundary/error-boundary';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';
import './App.scss';

const HomePage = lazy(() => import('./pages/homepage/homepage'));
const ShopPage = lazy(() => import('./pages/shop/shop'));
const SignInAndSignUpPage = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout'));

const App = ({checkUserSession, currentUser}) => {
  
  useEffect( () => {
    checkUserSession();
  }, [checkUserSession])

  return (
    <div className='app'>
      <Header/>
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner/>}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage}/>
            <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUpPage/>)}/>
          </Suspense>
        </ErrorBoundary>
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
