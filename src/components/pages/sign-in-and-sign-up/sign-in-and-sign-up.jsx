import SignIn from '../../sign-in/sign-in';
import SignUp from '../../sign-up/sign-up';

import './sign-in-and-sign-up.scss';

const SignInAndSignUpPage = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn/>
            <SignUp/>
        </div>
        
    );
}

export default SignInAndSignUpPage;