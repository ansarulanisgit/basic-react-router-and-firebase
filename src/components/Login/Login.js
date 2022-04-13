import React from 'react';
import './Login.css'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init'
import { getAuth } from 'firebase/auth';

const Login = () => {
    const auth = getAuth(app);
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    return (
        <div>
            <h2>Login</h2>
            <div>
                <button onClick={() =>signInWithGoogle()}>Google Sign In</button>
                <button>Github Sign In</button>
            </div> <br/> 
            <form >
                <input type="email" placeholder='Your Email' /> <br/>
                <input type="password" placeholder='Password'/> <br/>
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;